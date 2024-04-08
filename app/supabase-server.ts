import { Database } from '@/types_db';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { cache } from 'react';

export const createServerSupabaseClient = cache(() => {
  const cookieStore = cookies();
  return createServerComponentClient<Database>({ cookies: () => cookieStore });
});

export async function getSession() {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getUserDetails() {
  const supabase = createServerSupabaseClient();
  try {
    const { data: userDetails } = await supabase
      .from('users')
      .select('*')
      .single();
    return userDetails;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getRessource(ressource_id: number) {
  const supabase = createServerSupabaseClient();

  try {
    const { data: ressources } = await supabase
      .from('ressources')
      .select('*')
      .eq('id', ressource_id)
      .single();
    return ressources;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getRessources() {
  const supabase = createServerSupabaseClient();
  try {
    const { data: ressources } = await supabase
      .from('ressources_list')
      .select('*');
    return ressources;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getCourse(course_id: number) {
  const supabase = createServerSupabaseClient();

  try {
    const { data: courses } = await supabase
      .from('courses')
      .select('*')
      .eq('id', course_id)
      .single();
    return courses;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getCourses() {
  const supabase = createServerSupabaseClient();
  try {
    const { data: courses } = await supabase.from('courses_list').select('*');
    return courses;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getSubscription() {
  const supabase = createServerSupabaseClient();
  try {
    const { data: subscription } = await supabase
      .from('subscriptions')
      .select('*, prices(*, products(*))')
      .in('status', ['trialing', 'active'])
      .maybeSingle()
      .throwOnError();
    // console.log(subscription?.prices?.products?.id);
    return subscription;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export const getActiveProductsWithPrices = async () => {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' });

  if (error) {
    console.log(error.message);
  }
  return data ?? [];
};
