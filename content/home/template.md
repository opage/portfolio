---
aside: false
pageClass: wide-page
---

<div class="home-section">
  <div class="home-inner">
    <div class="flex flex-col items-center gap-8 py-10 md:flex-row md:py-16">
      <div class="flex-1 text-center md:text-left">
        <h1 class="home-name hero-fade-up">[[home-name]]</h1>
        <p class="home-role hero-fade-up delay-1 mt-2 text-xl font-semibold">
          <Typewriter />
        </p>
        <div class="hero-fade-up delay-2 mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
          <a class="btn-primary" href="[[home-about-link]]">[[home-about-action]]</a>
          <a class="btn-primary" href="[[home-projects-link]]">[[home-projects-action]]</a>
        </div>
      </div>
      <div class="hero-fade-up delay-2 flex-1">
        <img src="/images/home-main.svg" alt="[[home-image-alt]]" class="hero-image-float mx-auto w-full max-w-md" />
      </div>
    </div>
    <div class="hero-fade-up delay-3 mt-6 grid gap-4 sm:grid-cols-3">
      <div class="home-feature card p-6">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
          </svg>
        </div>
        <h3 class="mt-4 text-lg font-semibold text-brand-700 dark:text-brand-200">Backend</h3>
        <p class="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">[[feature-1-details]]</p>
      </div>
      <div class="home-feature card p-6">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </div>
        <h3 class="mt-4 text-lg font-semibold text-brand-700 dark:text-brand-200">Frontend</h3>
        <p class="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">[[feature-2-details]]</p>
      </div>
      <div class="home-feature card p-6">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
          </svg>
        </div>
        <h3 class="mt-4 text-lg font-semibold text-brand-700 dark:text-brand-200">Cloud</h3>
        <p class="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">[[feature-3-details]]</p>
      </div>
    </div>
  </div>
</div>

<IntroSection />
