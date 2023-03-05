import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const api = {};

export function createEvent(eventData) {
  return supabase.from("events").insert([eventData]);
}

export function uploadFile(file,id){
  return supabase.storage.from('avatars').upload(`public/${id}.png`,file, {
    cacheControl: '3600',
     upsert: false
})
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

export function signUp(email, password) {

  return supabase.auth.signUp({
    email,
    password,
  });
}

export default api;
