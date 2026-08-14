DROP POLICY IF EXISTS "Profiles viewable by everyone" ON public.profiles;

CREATE POLICY "Users view own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'::app_role));

CREATE OR REPLACE VIEW public.public_profiles
WITH (security_invoker = off) AS
SELECT id, user_id, display_name, avatar_url, city, area, bio,
       average_rating, total_ratings, verified_seller, created_at
FROM public.profiles;

GRANT SELECT ON public.public_profiles TO anon, authenticated;