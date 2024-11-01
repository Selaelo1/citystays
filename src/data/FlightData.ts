export interface Airline {
  id: number;
  name: string;
  logo: string;
  routes: Route[];
}

export interface Route {
  from: string;
  to: string;
  pricing: FlightPricing;
  times: string[];
  duration: string;
}

export interface FlightPricing {
  economy: {
    base: number;
    tax: number;
    luggage: number;
  };
  business: {
    base: number;
    tax: number;
    luggage: number;
  };
  firstClass: {
    base: number;
    tax: number;
    luggage: number;
  };
}

export const airlines: Airline[] = [
  {
    id: 1,
    name: "South African Airways",
    logo: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80",
    routes: [
      {
        from: 'Cape Town',
        to: 'Johannesburg',
        pricing: {
          economy: { base: 1200, tax: 250, luggage: 300 },
          business: { base: 3500, tax: 450, luggage: 0 },
          firstClass: { base: 6000, tax: 600, luggage: 0 }
        },
        times: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
        duration: '2h',
      },
      {
        from: 'Johannesburg',
        to: 'Durban',
        pricing: {
          economy: { base: 850, tax: 200, luggage: 250 },
          business: { base: 2500, tax: 350, luggage: 0 },
          firstClass: { base: 4500, tax: 500, luggage: 0 }
        },
        times: ['07:30', '09:30', '11:30', '13:30', '15:30', '17:30', '19:30'],
        duration: '1h 15m',
      }
    ]
  },
  {
    id: 2,
    name: "Kulula Airways",
    logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
    routes: [
      {
        from: 'Cape Town',
        to: 'Johannesburg',
        pricing: {
          economy: { base: 1100, tax: 220, luggage: 280 },
          business: { base: 3200, tax: 400, luggage: 0 },
          firstClass: { base: 5500, tax: 550, luggage: 0 }
        },
        times: ['05:30', '07:30', '09:30', '11:30', '13:30', '15:30', '17:30', '19:30'],
        duration: '2h',
      },
      {
        from: 'Johannesburg',
        to: 'Durban',
        pricing: {
          economy: { base: 800, tax: 180, luggage: 220 },
          business: { base: 2300, tax: 320, luggage: 0 },
          firstClass: { base: 4000, tax: 450, luggage: 0 }
        },
        times: ['06:30', '08:30', '10:30', '12:30', '14:30', '16:30', '18:30'],
        duration: '1h 15m',
      }
    ]
  },
  {
    id: 3,
    name: "FlySafair",
    logo: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80",
    routes: [
      {
        from: 'Johannesburg',
        to: 'Cape Town',
        pricing: {
          economy: { base: 1150, tax: 230, luggage: 270 },
          business: { base: 3300, tax: 420, luggage: 0 },
          firstClass: { base: 5800, tax: 580, luggage: 0 }
        },
        times: ['06:15', '08:15', '10:15', '12:15', '14:15', '16:15', '18:15', '20:15'],
        duration: '2h',
      },
      {
        from: 'Cape Town',
        to: 'Durban',
        pricing: {
          economy: { base: 1250, tax: 250, luggage: 300 },
          business: { base: 3600, tax: 450, luggage: 0 },
          firstClass: { base: 6200, tax: 620, luggage: 0 }
        },
        times: ['07:45', '11:45', '15:45', '19:45'],
        duration: '2h 15m',
      }
    ]
  }
];