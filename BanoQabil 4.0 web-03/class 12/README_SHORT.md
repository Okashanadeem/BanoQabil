Quick start (local) -> agg_exercises (/src)

1. copy .env.example -> .env and set MONGO_URI
2. npm install
3. npm run seed         # inserts sample captains + rides
4. npm run dev          # or npm start
5. Visit endpoints:
   GET  /api/top-cities
   GET  /api/monthly-revenue?months=6
   GET  /api/rides-with-captain?limit=20
   GET  /api/avg-fare-per-stop
