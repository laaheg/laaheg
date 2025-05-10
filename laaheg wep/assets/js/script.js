// حفظ المفضلة
function toggleFavorite(propertyId) {
  const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
  const exists = stored.includes(propertyId);

  if (exists) {
    const updated = stored.filter(id => id !== propertyId);
    localStorage.setItem('favorites', JSON.stringify(updated));
    alert('تمت إزالة العقار من المفضلة');
  } else {
    stored.push(propertyId);
    localStorage.setItem('favorites', JSON.stringify(stored));
    alert('تمت إضافة العقار إلى المفضلة');
  }
  renderFavoritesButton(propertyId);
}

// عرض زر التفعيل بشكل ديناميكي
function renderFavoritesButton(propertyId) {
  const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
  const isFav = stored.includes(propertyId);
  const btn = document.querySelector(`#fav-btn-${propertyId}`);
  if (btn) btn.textContent = isFav ? '❤️ مفضل' : '🤍 أضف للمفضلة';
}

// عرض العقارات المفضلة فقط
function renderFavoritesList(properties) {
  const container = document.getElementById('favorites-container');
  if (!container) return;
  const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
  const favs = properties.filter(p => stored.includes(p.id));

  if (favs.length === 0) {
    container.innerHTML = '<p>لا توجد عقارات محفوظة حالياً.</p>';
    return;
  }

  container.innerHTML = favs.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}" />
      <p><strong>${p.name}</strong></p>
      <p>${p.price}</p>
      <a href="property.html" class="cta">عرض التفاصيل</a>
      <span class="remove" onclick="toggleFavorite('${p.id}')">إزالة</span>
    </div>
  `).join('');
}
// قراءة ID العقار من الرابط
const params = new URLSearchParams(window.location.search);
const id = params.get("propertyId");

// بيانات تجريبية للعقارات (يفضل ربطها لاحقًا من قاعدة بيانات)
const properties = [
  {
    id: "1",
    name: "فيلا فاخرة - الرياض",
    price: "480 ر.س / ليلة",
    image: "assets/images/villa1.jpg",
    location: "الرياض - العليا",
    rating: "4.9",
    features: ["مسبح", "مواقف", "إنترنت", "صالة رياضية"]
  },
  {
    id: "2",
    name: "فيلا بإطلالة بحرية - جدة",
    price: "600 ر.س / ليلة",
    image: "assets/images/villa2.jpg",
    location: "جدة - الكورنيش",
    rating: "4.7",
    features: ["شاطئ", "مسبح", "مطبخ", "واي فاي"]
  },
  // أضف المزيد هنا...
];

// عرض البيانات
const container = document.getElementById("property-details");
const property = properties.find(p => p.id === id);

if (property && container) {
  container.innerHTML = `
    <img src="${property.image}" alt="${property.name}" class="main-image" />
    <h2>${property.name}</h2>
    <p>📍 ${property.location}</p>
    <p>⭐ ${property.rating}</p>
    <p><strong>${property.price}</strong></p>
    <ul>
      ${property.features.map(f => `<li>${f}</li>`).join("")}
    </ul>
    <button class="cta">تأكيد الحجز</button>
  `;
} else {
  container.innerHTML = "<p>لم يتم العثور على العقار.</p>";
}
const params = new URLSearchParams(window.location.search);
const id = params.get("propertyId");

const properties = [
  {
    id: "1",
    name: "برج فاخر - الرياض",
    price: "480 ر.س / الليلة",
    image: "assets/images/villa1.jpg",
    location: "الرياض - العليا",
    rating: "4.9",
    features: ["مسبح", "مواقف", "إنترنت", "صالة رياضية"]
  },
  {
    id: "2",
    name: "فيلا راقية - جدة",
    price: "650 ر.س / الليلة",
    image: "assets/images/villa2.jpg",
    location: "جدة - الكورنيش",
    rating: "4.7",
    features: ["شاطئ", "مسبح", "مطبخ", "واي فاي"]
  },
  {
    id: "3",
    name: "فيلا حديثة - نجران",
    price: "390 ر.س / الليلة",
    image: "assets/images/villa3.jpg",
    location: "نجران - حي النهضة",
    rating: "4.5",
    features: ["حديقة", "جلسات خارجية", "موقف", "واي فاي"]
  }
];

const container = document.getElementById("property-details");
const property = properties.find(p => p.id === id);

if (property && container) {
  container.innerHTML = `
    <img src="${property.image}" alt="${property.name}" class="main-image" style="width:100%; border-radius:10px; margin-bottom:1rem;" />
    <h2>${property.name}</h2>
    <p>📍 ${property.location}</p>
    <p>⭐ ${property.rating}</p>
    <p><strong>${property.price}</strong></p>
    <ul>
      ${property.features.map(f => `<li>${f}</li>`).join("")}
    </ul>
    <button class="cta">تأكيد الحجز</button>
  `;
} else if (container) {
  container.innerHTML = "<p>لم يتم العثور على هذا العقار.</p>";
}
