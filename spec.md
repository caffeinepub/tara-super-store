# New Para World Tsering Dorjee Company

## Current State
The current App.tsx is the Hunuman Paragliding Company page (the last actively edited company). The New Para World Tsering Dorjee Company page (v39) had:
- Hero section with company name, mobile 9808091436/9766047350, location Brunch Office Company, Bandipur, Pokhara, Nepal Sub-Metro
- Services: Tandem Paragliding, UltraLight Flight Booking, Pathao Booking, inDrive Booking, Bus/Jeep/Bike Rental, Tour Packages, Acupuncture Therapy, Dry Needling, Cupping Therapy, Moxibustion, Digital Wallet Sales, Daraz Sells Agent
- Owner: Tsering Dorjee (Acupuncture Therapist, APPI SIV Pilot License No 10359, Advanced SIV Pilot)
- Email: mypagentnewparaworld@gmail.com
- APPI credentials section
- License section with APPI certificate image
- Payment section: eSewa, NIC Asia MoBank, Khalti, cityPAY, MyPay, Bank Wallet/PayPal (with 9808091436 and therapisttseringdorjee@gmail.com)
- Booking form
- Contact section

## Requested Changes (Diff)

### Add
- "Travels & Tours" as a new product/service card in the Services section for New Para World Tsering Dorjee Company
- Description: Professional travels and tours packages across Nepal, including Pokhara sightseeing, trekking routes, and Himalayan destinations.

### Modify
- Rebuild App.tsx as the New Para World Tsering Dorjee Company site (same structure as v39) with the new Travels & Tours service added

### Remove
- Nothing

## Implementation Plan
1. Replace App.tsx with the New Para World Tsering Dorjee Company page (not Hunuman Paragliding)
2. Add "Travels & Tours" service card in SERVICES array with appropriate icon (e.g., Globe or Map) and color
3. Add "Travels & Tours" as a booking option in the booking form service selector
4. Keep all other sections identical to v39: company name, contacts, email, address, payment QR codes, APPI credentials, license section
