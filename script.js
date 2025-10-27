
  const translations = {
    en: {
      navServices: "Our Services",
      navAbout: "About",
      navBlogs: "Blogs & News",
      navContact: "Contact",
      navAccount: "Account",
      phone: "+2349067322844"
    },
    ar: {
      navServices: "خدماتنا",
      navAbout: "من نحن",
      navBlogs: "المدونة والأخبار",
      navContact: "اتصل بنا",
      navAccount: "الحساب",
      phone: "+٢٣٤٩٠٦٧٣٢٢٨٤٤"
    }
  };

  function setEnglish() {
    document.documentElement.dir = "ltr";
    document.getElementById("languageToggle").textContent = "EN";
    for (let key in translations.en) {
      const el = document.getElementById(key);
      if (el) el.textContent = translations.en[key];
    }
  }

  function setArabic() {
    document.documentElement.dir = "rtl";
    document.getElementById("languageToggle").textContent = "AR";
    for (let key in translations.ar) {
      const el = document.getElementById(key);
      if (el) el.textContent = translations.ar[key];
    }
  }


  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".navbar").classList.toggle("dark-mode");

    const navItems = document.querySelectorAll(".navitems");
    navItems.forEach(item => item.classList.toggle("dark-mode"));
  }








  const toggle = document.querySelector('.switch input[type="checkbox"]');

  toggle.addEventListener('change', function () {
    const isYearly = this.checked;

  
    document.querySelectorAll('.price').forEach(priceEl => {
      const monthly = priceEl.getAttribute('data-monthly');
      const yearly = priceEl.getAttribute('data-yearly');
      priceEl.textContent = `$${isYearly ? yearly : monthly}`;
    });


    document.querySelectorAll('.duration').forEach(durationEl => {
      durationEl.textContent = isYearly ? 'Per year' : 'Per month';
    });
  });

