import { createClient } from "@supabase/supabase-js";
require("dotenv").config();

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const api = {};

// api.createEvent = async function (eventData) {
//   const { data } = await supabase.from("Events").insert([eventData]);
//   return data;
// };
export function createEvent(eventData) {
  return supabase.from("events").insert([eventData]);
}

api.updateEvent = async function (eventId, eventData) {
  const { data } = await supabase
    .from("events")
    .update(eventData)
    .eq("id", eventId);

  return data;
};

api.deleteEvent = async function (eventId) {
  await supabase.from("events").delete().eq("id", eventId);
};

export function getEventDetails(eventId) {
  return supabase.from("events").select("*").eq("id", eventId);
}

export function getEventsFromDate(date) {
  return (
    supabase
      .from("events")
      .select("*")
      // filtrar eventos a partir de la fecha que le pongamos
      .gte("date", date)
  );
}

export function signIn(email, password) {
  return supabase.auth.signIn({
    email,
    password,
  });
}
// api.signIn = async function ({ email, password }) {
//   const { data } = await supabase.auth.signIn({
//     email,
//     password,
//   });
//   console.log({ data });
//   return data.user;
// };

// api.signUp = async function ({ email, password }) {
//   const { data } = await supabase.auth.signUp({
//     email,
//     password,
//   });

//   return data.user;
// };
export function signUp(email, password) {
  console.log({ email });
  return supabase.auth.signUp({
    email,
    password,
  });
}

export default api;
