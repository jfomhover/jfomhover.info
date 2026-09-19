source "https://rubygems.org"

# Jekyll core
gem "jekyll", "~> 4.3.0"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-redirect-from", "~> 0.16"
end

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Optional Windows file watching is not required for builds or `jekyll serve`.
# Webrick is required for Ruby 3.0+
gem "webrick", "~> 1.8"

# CSV and base64 are required for Ruby 3.4+
gem "csv"
gem "base64"
