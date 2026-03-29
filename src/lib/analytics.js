import ReactGA from "react-ga4";
import { supabase } from "./supabaseClient";


/**
 * Initializes Google Analytics with the Measurement ID from environment variables.
 */
export const initGA = () => {
  const measurementId = import.meta.env.VITE_MEASUREMENT_ID;
  if (measurementId) {
    ReactGA.initialize(measurementId);
    console.log("GA4 Initialized with ID:", measurementId);
  } else {
    console.warn("GA4 Measurement ID not found in environment variables.");
  }
};

/**
 * Tracks a page view event.
 * @param {string} path - The path of the page being viewed.
 */
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

/**
 * Tracks a custom event.
 * @param {string} category - Typically the object that was interacted with (e.g., 'Button').
 * @param {string} action - The type of interaction (e.g., 'Click').
 * @param {string} label - Practical label for the event (e.g., 'Download Resume').
 * @param {number} value - Optional numeric value associated with the event.
 */
export const trackEvent = (category, action, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

/**
 * Fetches geolocation information for the current visitor.
 * Uses ipapi.co (Free tier: 1000 requests/day, no key required for basic info).
 */
export const getVisitorGeoInfo = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return {
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country_name,
      ua: navigator.userAgent
    };
  } catch (error) {
    console.warn("Unable to fetch visitor geo info:", error);
    return {
      ip: "Unknown",
      city: "Unknown",
      region: "Unknown",
      country: "Unknown",
      ua: navigator.userAgent
    };
  }
};

/**
 * Tracks the visitor by fetching geo info and logging it to Supabase.
 */
export const trackVisitor = async () => {
  try {
    const geo = await getVisitorGeoInfo();
    const { error } = await supabase.from('visitor_logs').insert([{
      ip_address: geo.ip,
      city: geo.city,
      region: geo.region,
      country: geo.country,
      user_agent: geo.ua
    }]);
    if (error) throw error;
    console.log(`[Audit] 📝 Visitor logged from: ${geo.city || 'Unknown'}, ${geo.country || 'Unknown'}`);
  } catch (error) {
    console.warn(`[Audit] ⚠️ Failed to log visitor details:`, error.message);
  }
};
