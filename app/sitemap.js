export default async function sitemap() {
  // Fetch dynamic data from the backend
  const marketNewsEnLinks = await fetchEnglishMarketNews();
  const marketNewsArLinks = await fetchArabicMarketNews();
  const startingGatewayEnLinks = await fetchEnglishStartingGateway();
  const startingGatewayArLinks = await fetchArabicStartingGateway();
  const pressReleaseEnLinks = await fetchEnglishPressRelease();
  const pressReleaseArLinks = await fetchArabicPressRelease();
  const technicalAnalysisEnLinks = await fetchEnglishTechnicalAnalysis();
  const technicalAnalysisArLinks = await fetchArabicTechnicalAnalysis();
  const learningHubEnLinks = await fetchEnglishLearningHub();
  const learningHubArLinks = await fetchArabicLearningHub();

  // Define static URLs
  const staticUrls = [
    {
      url: "https://primexcapital.com/en",
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/about`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/about`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/about`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/about`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/about`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/awards`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/awards`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/awards`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/awards`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/awards`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/careers`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/careers`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/careers`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/careers`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/careers`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/contact`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/contact`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/contact`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/contact`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/contact`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/account-types`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/account-types`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/account-types`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/account-types`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/account-types`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/forex`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/forex`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/forex`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/forex`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/forex`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/metals`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/metals`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/metals`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/metals`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/metals`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/commodities`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/commodities`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/commodities`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/commodities`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/commodities`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/stocks`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/stocks`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/stocks`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/stocks`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/stocks`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/indices`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/indices`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/indices`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/indices`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/indices`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/platform/mt5-platform`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/platform/mt5-platform`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/platform/mt5-platform`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/platform/mt5-platform`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/platform/mt5-platform`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/ib-program`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/ib-program`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/ib-program`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/ib-program`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/ib-program`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/bonus`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/bonus`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/bonus`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/bonus`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/bonus`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/client-agreement`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/client-agreement`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/client-agreement`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/client-agreement`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/client-agreement`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/terms`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/terms`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/terms`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/terms`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/terms`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/policy-statement`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/policy-statement`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/policy-statement`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/policy-statement`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/policy-statement`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/risk-disclosure`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/risk-disclosure`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/risk-disclosure`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/risk-disclosure`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/risk-disclosure`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/complaints-management`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/complaints-management`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/complaints-management`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/complaints-management`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/complaints-management`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/cookie-policy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/cookie-policy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/cookie-policy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/cookie-policy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/cookie-policy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/policy-of-aml`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/policy-of-aml`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/policy-of-aml`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/policy-of-aml`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/policy-of-aml`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/liquidity-providing`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/liquidity-providing`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/liquidity-providing`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/liquidity-providing`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/liquidity-providing`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/grey-label-partner`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/grey-label-partner`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/grey-label-partner`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/grey-label-partner`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/grey-label-partner`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/regional-partner`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/regional-partner`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/regional-partner`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/regional-partner`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/regional-partner`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/academy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/academy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/academy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/academy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/academy`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/funded-account-competition`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/funded-account-competition`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/cn/funded-account-competition`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/fa/funded-account-competition`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/kur/funded-account-competition`,
      lastModified: new Date(),
    },

    {
      url: `https://primexcapital.com/en/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/expert-analysis/primex-learning-hub-/6641f0097c9be5623e10929e`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/expert-analysis/primex-learning-hub-/6641f0097c9be5623e10929e`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/expert-analysis/technical-analysis/6641f01d7c9be5623e1092a4`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/expert-analysis/technical-analysis/6641f01d7c9be5623e1092a4`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/market-news/all/news`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/market-news/all/news`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/en/starting-gateway/starting-gateway-en/starting-gateway-ar`,
      lastModified: new Date(),
    },
    {
      url: `https://primexcapital.com/ar/starting-gateway/starting-gateway-en/starting-gateway-ar`,
      lastModified: new Date(),
    },
  ];

  // Combine static and dynamic URLs
  const sitemapUrls = [
    ...staticUrls,
    ...marketNewsEnLinks,
    ...marketNewsArLinks,
    ...startingGatewayEnLinks,
    ...startingGatewayArLinks,
    ...pressReleaseEnLinks,
    ...pressReleaseArLinks,
    ...technicalAnalysisEnLinks,
    ...technicalAnalysisArLinks,
    ...learningHubEnLinks,
    ...learningHubArLinks,
  ];

  return sitemapUrls;
}

// Helper function to fetch market news english blogs slug from the backend
async function fetchEnglishMarketNews() {
  const categoryId = "664dd9c93f02939fcd48959e";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/market-news-en-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexbroker.com/en/market-news-detail/${item.slug}`,
      lastModified: new Date(item.lastModified || Date.now()),
    }));
    return links;
  } catch (error) {
    console.error("Failed to fetch dynamic links:", error);
    return [];
  }
}

// Helper function to fetch market news arabic blogs slug from the backend
async function fetchArabicMarketNews() {
  const categoryId = "664de39c3f02939fcd48a1d0";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/market-news-ar-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexbroker.com/ar/market-news-detail/${item.slug}`,
      lastModified: new Date(item.lastModified || Date.now()),
    }));
    return links;
  } catch (error) {
    console.error("Failed to fetch dynamic links:", error);
    return [];
  }
}

// Helper function to fetch starting gateway english blogs slug from the backend
async function fetchEnglishStartingGateway() {
  const categoryId = "66532f1079afa70a9ae6302e";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/starting-gateway-en-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexbroker.com/en/market-news-detail/${item.slug}`,
      lastModified: new Date(item.lastModified || Date.now()),
    }));
    return links;
  } catch (error) {
    console.error("Failed to fetch dynamic links:", error);
    return [];
  }
}

// Helper function to fetch starting gateway arabic blogs slug from the backend
async function fetchArabicStartingGateway() {
  const categoryId = "66532f4e79afa70a9ae6303e";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/starting-gateway-ar-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexbroker.com/ar/market-news-detail/${item.slug}`,
      lastModified: new Date(item.lastModified || Date.now()),
    }));
    return links;
  } catch (error) {
    console.error("Failed to fetch dynamic links:", error);
    return [];
  }
}

// Helper function to fetch press release english blogs slug from the backend
async function fetchEnglishPressRelease() {
  const categoryId = "66544954f5b226a0bd9b5813";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/press-release-en-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexbroker.com/en/market-news-detail/${item.slug}`,
      lastModified: new Date(item.lastModified || Date.now()),
    }));
    return links;
  } catch (error) {
    console.error("Failed to fetch dynamic links:", error);
    return [];
  }
}

// Helper function to fetch press release arabic blogs slug from the backend
async function fetchArabicPressRelease() {
  const categoryId = "665448dcf5b226a0bd9b574e";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/press-release-ar-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexbroker.com/ar/market-news-detail/${item.slug}`,
      lastModified: new Date(item.lastModified || Date.now()),
    }));
    return links;
  } catch (error) {
    console.error("Failed to fetch dynamic links:", error);
    return [];
  }
}

// Helper function to fetch technical analysis english blogs slug from the backend
async function fetchEnglishTechnicalAnalysis() {
  const categoryId = "6641f01d7c9be5623e1092a4";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/technical-analysis-en-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexbroker.com/en/expert-analysis-detail/${item.slug}`,
      lastModified: new Date(item.lastModified || Date.now()),
    }));
    return links;
  } catch (error) {
    console.error("Failed to fetch dynamic links:", error);
    return [];
  }
}

// Helper function to fetch technical analysis arabic blogs slug from the backend
async function fetchArabicTechnicalAnalysis() {
  const categoryId = "6641f01d7c9be5623e1092a4";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/technical-analysis-ar-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexbroker.com/ar/expert-analysis-detail/${item.slug}`,
      lastModified: new Date(item.lastModified || Date.now()),
    }));
    return links;
  } catch (error) {
    console.error("Failed to fetch dynamic links:", error);
    return [];
  }
}

// Helper function to fetch learning hub english blogs slug from the backend
async function fetchEnglishLearningHub() {
  const categoryId = "6641f0097c9be5623e10929e";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/learning-hub-en-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexbroker.com/en/expert-analysis-detail/${item.slug}`,
      lastModified: new Date(item.lastModified || Date.now()),
    }));
    return links;
  } catch (error) {
    console.error("Failed to fetch dynamic links:", error);
    return [];
  }
}

// Helper function to fetch learning hub arabic blogs slug from the backend
async function fetchArabicLearningHub() {
  const categoryId = "6641f0097c9be5623e10929e";
  try {
    const response = await fetch(
      `https://primexbroker.com/api/fetch/learning-hub-ar-slugs/${categoryId}`
    );
    const data = await response.json();
    const links = data.map((item) => ({
      url: `https://primexbroker.com/ar/expert-analysis-detail/${item.slug}`,
      lastModified: new Date(item.lastModified || Date.now()),
    }));
    return links;
  } catch (error) {
    console.error("Failed to fetch dynamic links:", error);
    return [];
  }
}
