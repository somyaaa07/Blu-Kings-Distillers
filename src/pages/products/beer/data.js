// data.js - Configuration data for About section
import { Award, Clock, Truck, Shield } from 'lucide-react';
export const aboutData = {
  hero: {
    backgroundImage: 'https://i.pinimg.com/736x/d8/17/c7/d817c72debc5945ac60f333df18c8753.jpg',
    title: 'Beer',
    description: [
        'Crafted with passion, brewed with character.',
      'Every pint tells a story of flavor, culture, and craft.',
      'Sip, savor & celebrate the taste of true beer artistry'
    ]
  },
  
  content: {
    eyebrow: {
      badge: 'Since 1920 • Family Owned',
      hasAnimation: true
    },
    
    heading: {
      line1: 'Crafted with',
      line2: 'Excellence'
    },
    
    subheading: 'A century of distinguished whisky craftsmanship, honoring tradition while embracing innovation.',
    
    description: [
      'For over a century, our distillery has been crafting award-winning whisky that embodies the perfect balance of tradition and innovation. Each bottle represents our unwavering commitment to excellence.',
      'Our master distillers employ time-honored techniques passed down through generations, combined with modern precision to create spirits of unparalleled quality. Every stage of production—from selecting the finest grains to the careful aging process in hand-selected oak barrels—is executed with meticulous attention to detail.'
    ]
  },
  
  images: {
    main: {
      src: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1200&h=1000&fit=crop&crop=center',
      alt: 'Premium whisky craftsmanship'
    },
    secondary: {
      src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=500&fit=crop',
      alt: 'Whisky barrel aging'
    }
  }
};

// ctaData.js - Configuration data for CTA section

export const ctaData = {
  heading: {
    title: 'Discover Your Perfect Dram',
    showDecorator: true
  },
  
  description: 'Experience the finest selection of premium whiskies from around the world. Join our exclusive collection today.',
  
  buttons: [
    {
      text: 'Explore Collection',
      type: 'primary',
      showIcon: true
    },
    {
      text: 'Learn More',
      type: 'secondary',
      showIcon: true
    }
  ],
  
  statistics: [
    {
      icon: 'layers',
      number: '500+',
      label: 'Premium Selections',
      iconPath: 'M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'
    },
    {
      icon: 'location',
      number: '30+',
      label: 'Countries',
      iconPath: 'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z',
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    },
    {
      icon: 'users',
      number: '50K+',
      label: 'Happy Customers',
      iconPath: 'M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'
    }
  ],
  
  styles: {
    primaryColor: '#040472',
    gradientFrom: 'from-blue-50',
    gradientTo: 'to-indigo-50'
  }
};

// data.js - Testimonials data for the carousel

export const testimonials = [
  {
    id: 1,
    text: "Before I tried their brew, I honestly thought beer was just… beer. But the first sip completely changed my mind. The balance of flavors, the aroma, everything was so refined. It felt like discovering a whole new world of craft. Now I appreciate the craft behind every pour and can’t wait to try more varieties.",
    title: "A new appreciation unlocked.",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=600&h=600&fit=crop"
  },
  {
    id: 2,
    text: "Every glass felt like a story told by the brewmaster. Smooth, bold, and surprisingly refreshing. The staff helped me discover flavors I didn’t even know existed in beer. From the first taste, I knew this wasn't just a drink — it was an experience that would stay with me.",
    title: "Beer tasting elevated.",
    image: "https://images.unsplash.com/photo-1559440160-1467f79b0177?w=600&h=600&fit=crop"
  },
  {
    id: 3,
    text: "I’ve always enjoyed beer casually, but the tasting session here opened my eyes to the art behind brewing. I could taste hints of citrus, malt, and unique notes that made every sip exciting. It was fun, interactive, and honestly made me feel like a beer connoisseur!",
    title: "Discovered real flavor.",
    image: "https://images.unsplash.com/photo-1541557435984-1c79685a082b?w=600&h=600&fit=crop"
  },
  {
    id: 4,
    text: "Trying their signature brew was one of the best decisions ever. The quality, the craftsmanship, the vibe — all top-notch. I met amazing people, tasted incredible beers, and left feeling like I finally understood what good beer really is. Can’t wait to return for more.",
    title: "Best beer experience ever.",
    image: "https://images.unsplash.com/photo-1527168027771-7472b04a19c5?w=600&h=600&fit=crop"
  },
  {
    id: 5,
    text: "Never thought a tasting event could be so memorable! The variety was impressive and each flavor had something unique to offer. I walked out not just with new favorites but with a real passion for craft beer. Cheers to discovering something that brings so much joy!",
    title: "Cheers to new flavors!",
    image: "https://images.unsplash.com/photo-1527169402691-a3d7b416a6f0?w=600&h=600&fit=crop"
  }
];


// data.js - Card data for the marquee component

export const topRowCards = [
  {
    title: "Glenfiddich 18",
    imageUrl: "https://i.pinimg.com/1200x/b1/a3/32/b1a332060d6cde0480b186032ed18aff.jpg",
  },
  {
    title: "Macallan Rare",
    imageUrl: "https://i.pinimg.com/736x/07/cd/d6/07cdd6e62abaa97aac95b2f4d84debee.jpg",
  },
  {
    title: "Lagavulin 16",
    imageUrl: "https://i.pinimg.com/736x/81/e5/40/81e540bf930f631c66dc9324333318af.jpg",
  },
  {
    title: "Highland Park",
    imageUrl: "https://i.pinimg.com/1200x/f1/e4/65/f1e465995264e1a616334f22d9729233.jpg",
  },
  {
    title: "Talisker Storm",
    imageUrl: "https://i.pinimg.com/736x/c0/ed/5a/c0ed5a3a0d37331d371fe38de881c0d0.jpg",
  }
];

export const bottomRowCards = [
  {
    title: "Ardbeg Uigeadail",
    imageUrl: "https://i.pinimg.com/1200x/a9/fc/f7/a9fcf71c92b5661cae16b915060ffdd1.jpg"
  },
  {
    title: "Oban 14 Year",
    imageUrl: "https://i.pinimg.com/1200x/a4/4d/d9/a44dd940bbf19649c532286679beece3.jpg"
  },
  {
    title: "Bowmore 15",
    imageUrl: "https://i.pinimg.com/736x/a7/d0/5a/a7d05a2b8841b771a0d12f561f9a3540.jpg"
  },
  {
    title: "Dalmore 18",
    imageUrl: "https://i.pinimg.com/736x/fc/6d/70/fc6d7002eb810a42e34fae94e3f4428c.jpg"
  },
  {
    title: "Glenmorangie",
    imageUrl: "https://i.pinimg.com/1200x/1c/4a/04/1c4a04632bc87f24a06aefa1796a37a9.jpg"
  }
];

export const benefits = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully curated selection of the finest whiskies from around the world"
  },
  {
    icon: Clock,
    title: "Aged Perfection",
    description: "Every bottle represents years of masterful aging and craftsmanship"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Swift and secure shipping directly to your doorstep nationwide"
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "100% authentic products with verified certificates of origin"
  }
];