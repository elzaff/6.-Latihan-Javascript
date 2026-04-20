"use strict";

const studentNamePool = [
    "Jonathan Anderson Manurung",
    "Ahnaf Tsabit Attaqi",
    "Tri Ismunhadi Julik Cakra Wibawa",
    "Umar Al Faris",
    "Muhammad Farhan",
    "Muhammad Hadidan Nurhaunan",
    "Ustu Bina Syahdiba",
    "Muhammad Dayyan Ghazanfar Latief",
    "Ahmad Naufal Farras",
    "Syauqi Nabil Tasri",
    "Sitti Aminah",
    "Muhammad Fathur Aziz",
    "Wijdan Razefi Al Hawwari",
    "Mohammad Akmal Fayyazi",
    "Arvito Rajapandya Natlysandro",
    "Marvel Mahanara",
    "Hisbullah Rafi Dzaky",
    "Ferri Adi Prasetya",
    "Fazle Mawla Wahyuhanda",
    "Royan Harits Yustanto",
    "Berliana Sarlita Rahajeng",
    "Mochammad Henry Alifian",
    "Rafli Djanuar Anangsyah",
    "Izzah Naufalia Adila",
    "Ardhian Junior Caesar",
    "Tuti Purwaningsih",
    "Arya Pratama Rhama Putra",
    "Raditya Akmal",
    "Kayla Riza Putri Irjayanto",
    "Wayan Raditya Putra",
    "Jylan Annisa Mumtaza Syidana",
    "Seifeldein Akbar",
    "Muhammad Nabil Dhiyaulhaq",
    "Rasya Audrea Bramantya Wijaya",
    "Nazhif Berlian Nashrullah",
    "Shabrina Sarayati",
    "Jeremy Mattathias Mboe",
    "Fa'iz Akbar Hizbullah",
    "Belvany Virginia Kenetta Setiawan",
    "Sultan Hamdi Jailani Daulay",
    "Muhammad Hisyam Al Arby",
    "Chelsea",
    "Muhammad Aditya Nugraha",
    "Muhammad Fatih Al Fawwaz",
    "Syahri Banun",
    "Muhammad Robitul Jaksy"
];

const courseLecturerMap = {
    "EA234407 - Pemrosesan Bahasa Natural (N)": [
        "Dini Adni Navastara, S.Kom., M.Sc."
    ],
    "EA234404 - Pemrograman Web (N)": [
        "Fajar Baskoro, S.Kom., M.T."
    ],
    "EA234406 - Pengolahan Citra Digital (N)": [
        "Dr. Anny Yuniarti, S.Kom., M.Comp.Sc.",
        "Aldinata Rizky Revanda, S.Kom., M.Kom."
    ],
    "EA234402 - Grafika Komputer (N)": [
        "Dr. Anny Yuniarti, S.Kom., M.Comp.Sc."
    ],
    "EA234405 - Deep Learning (N)": [
        "Dini Adni Navastara, S.Kom., M.Sc.",
        "Aldinata Rizky Revanda, S.Kom., M.Kom."
    ],
    "EA234403 - Interaksi Manusia dan Komputer (N)": [
        "Siska Arifiani, S.Kom., M.Kom."
    ],
    "UG234914 - Bahasa Inggris (30)": [
        "Dr. Kartika Nuswantara, S.Pd., M.Pd."
    ],
    "EA234401 - Konsep Pengembangan dan Perancangan Perangkat Lunak (N)": [
        "Dr. Sarwosri, S.Kom., M.T."
    ]
};

const fallbackPostalRows = [
    {
        province: "JAWA TIMUR",
        regency: "KOTA SURABAYA",
        district: "WONOKROMO",
        postalCodes: ["60241", "60242", "60243", "60244", "60245", "60246"],
        villages: ["Darmo", "Jagir", "Ngagel", "Sawunggaling", "Wonokromo"],
        timezone: "WIB"
    },
    {
        province: "JAWA TIMUR",
        regency: "KOTA SURABAYA",
        district: "GUBENG",
        postalCodes: ["60281", "60282", "60283", "60284", "60286"],
        villages: ["Airlangga", "Baratajaya", "Gubeng", "Mojo", "Pucang Sewu"],
        timezone: "WIB"
    },
    {
        province: "DKI JAKARTA",
        regency: "KOTA JAKARTA SELATAN",
        district: "KEBAYORAN BARU",
        postalCodes: ["12110", "12120", "12130", "12140", "12160"],
        villages: ["Gandaria Utara", "Gunung", "Kramat Pela", "Pulo", "Rawa Barat"],
        timezone: "WIB"
    },
    {
        province: "JAWA BARAT",
        regency: "KOTA BANDUNG",
        district: "COBLONG",
        postalCodes: ["40131", "40132", "40133", "40134", "40135"],
        villages: ["Cipaganti", "Dago", "Lebak Siliwangi", "Sadang Serang", "Sekeloa"],
        timezone: "WIB"
    },
    {
        province: "DI YOGYAKARTA",
        regency: "KOTA YOGYAKARTA",
        district: "GONDOKUSUMAN",
        postalCodes: ["55221", "55222", "55223", "55224", "55225"],
        villages: ["Baciro", "Demangan", "Klitren", "Kotabaru", "Terban"],
        timezone: "WIB"
    },
    {
        province: "JAWA TENGAH",
        regency: "KOTA SEMARANG",
        district: "TEMBALANG",
        postalCodes: ["50271", "50272", "50273", "50274", "50275"],
        villages: ["Bulusan", "Kramas", "Meteseh", "Rowosari", "Tembalang"],
        timezone: "WIB"
    },
    {
        province: "BALI",
        regency: "KABUPATEN BADUNG",
        district: "KUTA",
        postalCodes: ["80361", "80362"],
        villages: ["Kedonganan", "Kuta", "Legian", "Seminyak", "Tuban"],
        timezone: "WITA"
    },
    {
        province: "SUMATERA UTARA",
        regency: "KOTA MEDAN",
        district: "MEDAN BARU",
        postalCodes: ["20153", "20154", "20155"],
        villages: ["Babura", "Darat", "Merdeka", "Padang Bulan", "Petisah Hulu"],
        timezone: "WIB"
    },
    {
        province: "SULAWESI SELATAN",
        regency: "KOTA MAKASSAR",
        district: "PANAKKUKANG",
        postalCodes: ["90231", "90232", "90233", "90234"],
        villages: ["Karampuang", "Karuwisi", "Masale", "Pampang", "Panaikang"],
        timezone: "WITA"
    },
    {
        province: "KALIMANTAN TIMUR",
        regency: "KOTA BALIKPAPAN",
        district: "BALIKPAPAN SELATAN",
        postalCodes: ["76113", "76114", "76115", "76116"],
        villages: ["Damai", "Gunung Bahagia", "Sepinggan", "Sungai Nangka"],
        timezone: "WITA"
    },

];

const regionApiBase = "https://www.emsifa.com/api-wilayah-indonesia/api";
const postalApiBase = "https://kodepos.vercel.app/search/?q=";
const nameSuggestionMinChars = 2;

const dom = {
    navLinks: Array.from(document.querySelectorAll(".nav-link")),
    registrationForm: document.getElementById("registrationForm"),
    studentName: document.getElementById("studentName"),
    nameSuggestions: document.getElementById("nameSuggestions"),
    nrp: document.getElementById("nrp"),
    courseSelect: document.getElementById("courseSelect"),
    lecturerSelect: document.getElementById("lecturerSelect"),
    registrationResult: document.getElementById("registrationResult"),
    postalForm: document.getElementById("postalForm"),
    provinceSelect: document.getElementById("provinceSelect"),
    regencySelect: document.getElementById("regencySelect"),
    districtSelect: document.getElementById("districtSelect"),
    postalResult: document.getElementById("postalResult")
};

const regionState = {
    provinces: [],
    regencies: [],
    districts: [],
    useFallbackHierarchy: false
};

initializePage();

function initializePage() {
    setupNavigationHighlight();
    setupRegistrationForm();
    setupPostalForm();
}

function setupNavigationHighlight() {
    const sectionIds = ["tugas-1", "tugas-2"];

    const sections = new Map(
        sectionIds
            .map((id) => [id, document.getElementById(id)])
            .filter((entry) => Boolean(entry[1]))
    );

    function activateSection(activeId) {
        sectionIds.forEach((id) => {
            const section = sections.get(id);
            if (!section) {
                return;
            }

            section.classList.toggle("is-hidden", id !== activeId);
        });

        dom.navLinks.forEach((link) => {
            const targetId = (link.getAttribute("href") || "").replace("#", "");
            const isActive = targetId === activeId;

            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    dom.navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const targetId = (link.getAttribute("href") || "").replace("#", "");
            if (!sections.has(targetId)) {
                return;
            }

            activateSection(targetId);
            window.location.hash = targetId;
        });
    });

    const hashId = window.location.hash.replace("#", "");
    const defaultId = sections.has("tugas-1") ? "tugas-1" : sectionIds.find((id) => sections.has(id));
    const initialId = sections.has(hashId) ? hashId : defaultId;

    if (initialId) {
        activateSection(initialId);
    }
}

function setupRegistrationForm() {
    populateCourseOptions();
    setupNameSuggestions();

    dom.courseSelect.addEventListener("change", handleCourseChange);
    dom.registrationForm.addEventListener("submit", handleRegistrationSubmit);
}

function populateCourseOptions() {
    const courses = Object.keys(courseLecturerMap);

    courses.forEach((courseName) => {
        const option = document.createElement("option");
        option.value = courseName;
        option.textContent = courseName;
        dom.courseSelect.appendChild(option);
    });
}

function handleCourseChange(event) {
    const selectedCourse = event.target.value;
    const lecturers = courseLecturerMap[selectedCourse] || [];

    dom.lecturerSelect.innerHTML = "";

    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = selectedCourse
        ? "Pilih dosen pengampu..."
        : "Pilih mata kuliah dulu";

    dom.lecturerSelect.appendChild(placeholderOption);

    if (!selectedCourse) {
        dom.lecturerSelect.disabled = true;
        return;
    }

    lecturers.forEach((lecturer) => {
        const option = document.createElement("option");
        option.value = lecturer;
        option.textContent = lecturer;
        dom.lecturerSelect.appendChild(option);
    });

    dom.lecturerSelect.disabled = false;
}

function setupNameSuggestions() {
    dom.studentName.addEventListener("input", () => {
        const keyword = dom.studentName.value.trim();

        if (keyword.length < nameSuggestionMinChars) {
            hideSuggestions();
            return;
        }

        renderNameSuggestions(findLocalNameMatches(keyword));
    });

    dom.studentName.addEventListener("focus", () => {
        const keyword = dom.studentName.value.trim();

        if (keyword.length >= nameSuggestionMinChars) {
            renderNameSuggestions(findLocalNameMatches(keyword));
        }
    });

    document.addEventListener("click", (event) => {
        const clickedInside = event.target.closest(".autocomplete-wrap");
        if (!clickedInside) {
            hideSuggestions();
        }
    });
}

function findLocalNameMatches(keyword) {
    const normalizedKeyword = keyword.toLowerCase();

    return studentNamePool
        .filter((name) => name.toLowerCase().includes(normalizedKeyword))
        .slice(0, 8);
}

function renderNameSuggestions(matches) {
    dom.nameSuggestions.innerHTML = "";

    if (!matches.length) {
        const item = document.createElement("li");
        item.className = "suggestion-item";
        item.textContent = "Nama tidak ditemukan di daftar mahasiswa";
        item.tabIndex = -1;
        dom.nameSuggestions.appendChild(item);
        dom.nameSuggestions.classList.remove("hidden");
        return;
    }

    matches.forEach((name) => {
        const item = document.createElement("li");
        item.className = "suggestion-item";
        item.textContent = name;
        item.setAttribute("role", "option");
        item.tabIndex = 0;

        item.addEventListener("click", () => {
            dom.studentName.value = name;
            hideSuggestions();
        });

        item.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                dom.studentName.value = name;
                hideSuggestions();
            }
        });

        dom.nameSuggestions.appendChild(item);
    });

    dom.nameSuggestions.classList.remove("hidden");
}

function hideSuggestions() {
    dom.nameSuggestions.classList.add("hidden");
}

function handleRegistrationSubmit(event) {
    event.preventDefault();

    const studentName = dom.studentName.value.trim();
    const nrp = dom.nrp.value.trim();
    const course = dom.courseSelect.value;
    const lecturer = dom.lecturerSelect.value;

    if (!/^\d{10,12}$/.test(nrp)) {
        dom.nrp.focus();
        dom.nrp.setCustomValidity("NRP harus berupa angka 10 sampai 12 digit.");
        dom.nrp.reportValidity();
        return;
    }

    dom.nrp.setCustomValidity("");

    dom.registrationResult.classList.remove("empty");
    dom.registrationResult.innerHTML = `
    <h3 class="result-title">Registrasi Berhasil Dicatat</h3>
    <div class="result-grid">
      <div class="result-item"><span>Nama Mahasiswa</span><strong>${escapeHTML(studentName)}</strong></div>
      <div class="result-item"><span>NRP</span><strong>${escapeHTML(nrp)}</strong></div>
      <div class="result-item"><span>Mata Kuliah</span><strong>${escapeHTML(course)}</strong></div>
      <div class="result-item"><span>Dosen</span><strong>${escapeHTML(lecturer)}</strong></div>
    </div>
    <p class="result-meta">Data dicatat pada ${formatDateTime(new Date())}</p>
  `;
}

async function setupPostalForm() {
    dom.provinceSelect.addEventListener("change", handleProvinceChange);
    dom.regencySelect.addEventListener("change", handleRegencyChange);
    dom.postalForm.addEventListener("submit", handlePostalSearch);

    await loadProvinces();
}

async function loadProvinces() {
    setLoadingOption(dom.provinceSelect, "Memuat data provinsi...");
    resetSelect(dom.regencySelect, "Pilih provinsi dulu", true);
    resetSelect(dom.districtSelect, "Pilih kabupaten / kota dulu", true);

    try {
        const apiRows = await fetchJson(`${regionApiBase}/provinces.json`);
        regionState.provinces = apiRows.map((row) => ({
            id: row.id,
            name: row.name,
            source: "api"
        }));

        populateSelect(dom.provinceSelect, regionState.provinces, "Pilih provinsi...");
    } catch (error) {
        regionState.useFallbackHierarchy = true;
        regionState.provinces = getFallbackProvinces();

        populateSelect(dom.provinceSelect, regionState.provinces, "Pilih provinsi...");
        renderPostalNotice(
            "API wilayah sedang tidak bisa diakses, sementara pakai data fallback terbatas."
        );
    }
}

async function handleProvinceChange() {
    const provinceId = dom.provinceSelect.value;

    resetSelect(dom.regencySelect, "Pilih kabupaten / kota dulu", true);
    resetSelect(dom.districtSelect, "Pilih kabupaten / kota dulu", true);
    clearPostalResult();

    if (!provinceId) {
        return;
    }

    setLoadingOption(dom.regencySelect, "Memuat kabupaten / kota...");

    const province = regionState.provinces.find((item) => item.id === provinceId);
    if (!province) {
        return;
    }

    if (!regionState.useFallbackHierarchy) {
        try {
            const apiRows = await fetchJson(`${regionApiBase}/regencies/${province.id}.json`);
            regionState.regencies = apiRows.map((row) => ({
                id: row.id,
                name: row.name,
                source: "api"
            }));

            populateSelect(dom.regencySelect, regionState.regencies, "Pilih kabupaten / kota...");
            return;
        } catch (error) {
            regionState.useFallbackHierarchy = true;
        }
    }

    regionState.regencies = getFallbackRegencies(province.name);
    populateSelect(dom.regencySelect, regionState.regencies, "Pilih kabupaten / kota...");
}

async function handleRegencyChange() {
    const regencyId = dom.regencySelect.value;

    resetSelect(dom.districtSelect, "Pilih kecamatan dulu", true);
    clearPostalResult();

    if (!regencyId) {
        return;
    }

    setLoadingOption(dom.districtSelect, "Memuat kecamatan...");

    const province = regionState.provinces.find(
        (item) => item.id === dom.provinceSelect.value
    );
    const regency = regionState.regencies.find((item) => item.id === regencyId);

    if (!province || !regency) {
        return;
    }

    if (!regionState.useFallbackHierarchy) {
        try {
            const apiRows = await fetchJson(`${regionApiBase}/districts/${regency.id}.json`);
            regionState.districts = apiRows.map((row) => ({
                id: row.id,
                name: row.name,
                source: "api"
            }));

            populateSelect(dom.districtSelect, regionState.districts, "Pilih kecamatan...");
            return;
        } catch (error) {
            regionState.useFallbackHierarchy = true;
        }
    }

    regionState.districts = getFallbackDistricts(province.name, regency.name);
    populateSelect(dom.districtSelect, regionState.districts, "Pilih kecamatan...");
}

async function handlePostalSearch(event) {
    event.preventDefault();

    const province = regionState.provinces.find(
        (item) => item.id === dom.provinceSelect.value
    );
    const regency = regionState.regencies.find((item) => item.id === dom.regencySelect.value);
    const district = regionState.districts.find(
        (item) => item.id === dom.districtSelect.value
    );

    if (!province || !regency || !district) {
        renderPostalNotice("Lengkapi provinsi, kabupaten/kota, dan kecamatan terlebih dahulu.");
        return;
    }

    dom.postalResult.classList.remove("empty");
    dom.postalResult.textContent = "Mencari kode pos...";

    const queryCandidates = buildPostalQueryCandidates(
        province.name,
        regency.name,
        district.name
    );

    try {
        let matchedRows = [];

        for (const queryText of queryCandidates) {
            const apiResult = await fetchJson(`${postalApiBase}${encodeURIComponent(queryText)}`);
            const rows = Array.isArray(apiResult.data) ? apiResult.data : [];

            matchedRows = rows.filter((row) => {
                return (
                    isSimilarArea(row.province, province.name) &&
                    isSimilarArea(row.regency, regency.name) &&
                    isSimilarArea(row.district, district.name)
                );
            });

            if (matchedRows.length > 0) {
                break;
            }

            matchedRows = rows.filter((row) => {
                return (
                    isSimilarArea(row.regency, regency.name) &&
                    isSimilarArea(row.district, district.name)
                );
            });

            if (matchedRows.length > 0) {
                break;
            }
        }

        if (matchedRows.length > 0) {
            renderPostalFromApi(matchedRows, province.name, regency.name, district.name);
            return;
        }

        throw new Error("Data kode pos tidak ditemukan dari API.");
    } catch (error) {
        const fallbackData = getFallbackPostalData(province.name, regency.name, district.name);

        if (fallbackData) {
            renderPostalFromFallback(fallbackData, true);
            return;
        }

        renderPostalNotice(
            `Kode pos belum ditemukan untuk ${formatDisplayName(district.name)}, ${formatDisplayName(
                regency.name
            )}, ${formatDisplayName(province.name)}.`
        );
    }
}

function setLoadingOption(selectElement, message) {
    selectElement.innerHTML = "";
    const option = document.createElement("option");
    option.value = "";
    option.textContent = message;
    selectElement.appendChild(option);
    selectElement.disabled = true;
}

function resetSelect(selectElement, placeholder, disabled) {
    selectElement.innerHTML = "";
    const option = document.createElement("option");
    option.value = "";
    option.textContent = placeholder;
    selectElement.appendChild(option);
    selectElement.disabled = disabled;
}

function populateSelect(selectElement, rows, placeholder) {
    resetSelect(selectElement, placeholder, rows.length === 0);

    rows.forEach((row) => {
        const option = document.createElement("option");
        option.value = row.id;
        option.textContent = formatDisplayName(row.name);
        selectElement.appendChild(option);
    });

    selectElement.disabled = rows.length === 0;
}

function clearPostalResult() {
    dom.postalResult.classList.add("empty");
    dom.postalResult.textContent =
        "Pilih provinsi, kabupaten/kota, dan kecamatan untuk menampilkan kode pos.";
}

function renderPostalNotice(text) {
    dom.postalResult.classList.remove("empty");
    dom.postalResult.innerHTML = `<p class="result-meta">${escapeHTML(text)}</p>`;
}

function renderPostalFromApi(rows, provinceName, regencyName, districtName) {
    const uniqueCodes = [...new Set(rows.map((row) => String(row.code)))].sort();
    const villages = [...new Set(rows.map((row) => row.village).filter(Boolean))];
    const first = rows[0];

    dom.postalResult.classList.remove("empty");
    dom.postalResult.innerHTML = `
    <h3 class="result-title">Hasil Pencarian Kode Pos</h3>
    <div class="result-grid">
      <div class="result-item"><span>Provinsi</span><strong>${escapeHTML(
        formatDisplayName(provinceName)
    )}</strong></div>
      <div class="result-item"><span>Kabupaten / Kota</span><strong>${escapeHTML(
        formatDisplayName(regencyName)
    )}</strong></div>
      <div class="result-item"><span>Kecamatan</span><strong>${escapeHTML(
        formatDisplayName(districtName)
    )}</strong></div>
      <div class="result-item"><span>Jumlah Kelurahan</span><strong>${villages.length} wilayah</strong></div>
    </div>
    <div class="postal-codes">
      ${uniqueCodes.map((code) => `<span class="code-pill">${escapeHTML(code)}</span>`).join("")}
    </div>
    <p class="result-meta">Kelurahan terdeteksi: ${escapeHTML(villages.slice(0, 8).join(", "))}${villages.length > 8 ? " dan lainnya" : ""
        }.</p>
    <p class="result-meta">Zona waktu: ${escapeHTML(first.timezone || "- ")} - Koordinat: ${escapeHTML(
            `${first.latitude ?? "-"}, ${first.longitude ?? "-"}`
        )}</p>
  `;
}

function renderPostalFromFallback(row, fromFailedApi) {
    dom.postalResult.classList.remove("empty");
    dom.postalResult.innerHTML = `
    <h3 class="result-title">Hasil Pencarian Kode Pos (Fallback)</h3>
    <div class="result-grid">
      <div class="result-item"><span>Provinsi</span><strong>${escapeHTML(
        formatDisplayName(row.province)
    )}</strong></div>
      <div class="result-item"><span>Kabupaten / Kota</span><strong>${escapeHTML(
        formatDisplayName(row.regency)
    )}</strong></div>
      <div class="result-item"><span>Kecamatan</span><strong>${escapeHTML(
        formatDisplayName(row.district)
    )}</strong></div>
      <div class="result-item"><span>Jumlah Kelurahan</span><strong>${row.villages.length} wilayah</strong></div>
    </div>
    <div class="postal-codes">
      ${row.postalCodes
            .map((code) => `<span class="code-pill">${escapeHTML(code)}</span>`)
            .join("")}
    </div>
    <p class="result-meta">Kelurahan contoh: ${escapeHTML(row.villages.join(", "))}.</p>
    <p class="result-meta">Zona waktu: ${escapeHTML(row.timezone)}${fromFailedApi ? " - Data ini tampil sebagai cadangan saat API tidak memberikan hasil." : ""
        }</p>
  `;
}

function getFallbackProvinces() {
    const names = [...new Set(fallbackPostalRows.map((row) => row.province))];
    return names.map((name) => ({
        id: name,
        name,
        source: "fallback"
    }));
}

function getFallbackRegencies(provinceName) {
    const provinceKey = normalizeArea(provinceName);
    const names = [
        ...new Set(
            fallbackPostalRows
                .filter((row) => normalizeArea(row.province) === provinceKey)
                .map((row) => row.regency)
        )
    ];

    return names.map((name) => ({
        id: name,
        name,
        source: "fallback"
    }));
}

function getFallbackDistricts(provinceName, regencyName) {
    const provinceKey = normalizeArea(provinceName);
    const regencyKey = normalizeArea(regencyName);

    const names = [
        ...new Set(
            fallbackPostalRows
                .filter(
                    (row) =>
                        normalizeArea(row.province) === provinceKey &&
                        normalizeArea(row.regency) === regencyKey
                )
                .map((row) => row.district)
        )
    ];

    return names.map((name) => ({
        id: name,
        name,
        source: "fallback"
    }));
}

function getFallbackPostalData(provinceName, regencyName, districtName) {
    return (
        fallbackPostalRows.find((row) => {
            return (
                normalizeArea(row.province) === normalizeArea(provinceName) &&
                normalizeArea(row.regency) === normalizeArea(regencyName) &&
                normalizeArea(row.district) === normalizeArea(districtName)
            );
        }) || null
    );
}

function isSimilarArea(apiName, selectedName) {
    const apiText = normalizeArea(apiName);
    const selectedText = normalizeArea(selectedName);
    return apiText.includes(selectedText) || selectedText.includes(apiText);
}

function buildPostalQueryCandidates(provinceName, regencyName, districtName) {
    const province = normalizeArea(provinceName);
    const regency = normalizeArea(regencyName);
    const district = normalizeArea(districtName);

    return [`${district} ${regency}`, `${district} ${regency} ${province}`, district];
}

function normalizeArea(value) {
    return String(value || "")
        .toUpperCase()
        .replace(/KABUPATEN|KAB\.|KAB |KOTA /g, "")
        .replace(/[^A-Z0-9 ]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function formatDisplayName(value) {
    const lower = String(value || "").toLowerCase();
    return lower.replace(/\b\w/g, (char) => char.toUpperCase());
}

async function fetchJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Request gagal: ${response.status}`);
    }

    return response.json();
}

function escapeHTML(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function formatDateTime(date) {
    return new Intl.DateTimeFormat("id-ID", {
        dateStyle: "full",
        timeStyle: "short"
    }).format(date);
}
