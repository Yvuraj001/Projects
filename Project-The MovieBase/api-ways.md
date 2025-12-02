Happy Coding! 🚀# 🎬 TMDB API Complete Guide

A comprehensive guide to fetch different types of movie data from The Movie Database (TMDB) API.

---

## 📋 Table of Contents
- [Getting Started](#getting-started)
- [Basic Endpoints](#basic-endpoints)
- [Discover API](#discover-api)
- [Genre IDs](#genre-ids)
- [Advanced Filtering](#advanced-filtering)
- [Common Parameters](#common-parameters)
- [Examples](#examples)

---

## 🚀 Getting Started

**Base URL:** `https://api.themoviedb.org/3`  
**Your API Key:** `95a08eadc472f7ab8f7ac10cfe63027a`  
**Image Base URL:** `https://image.tmdb.org/t/p/w500` (for posters)

### Basic Request Format
```javascript
const API_KEY = '95a08eadc472f7ab8f7ac10cfe63027a';
const BASE_URL = 'https://api.themoviedb.org/3';

fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
  .then(res => res.json())
  .then(data => console.log(data.results));
```

---

## 📺 Basic Endpoints

### 1. Popular Movies
Get the most popular movies currently.

```javascript
GET /movie/popular?api_key=${API_KEY}&language=en-US&page=1
```

**Example:**
```javascript
fetch('https://api.themoviedb.org/3/movie/popular?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&page=1')
```

---

### 2. Top Rated Movies
Get the highest-rated movies of all time.

```javascript
GET /movie/top_rated?api_key=${API_KEY}&language=en-US&page=1
```

**Example:**
```javascript
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&page=1')
```

---

### 3. Now Playing
Get movies currently playing in theaters.

```javascript
GET /movie/now_playing?api_key=${API_KEY}&language=en-US&page=1
```

**Example:**
```javascript
fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&page=1')
```

---

### 4. Upcoming Movies
Get movies that will be released soon.

```javascript
GET /movie/upcoming?api_key=${API_KEY}&language=en-US&page=1
```

**Example:**
```javascript
fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&page=1')
```

---

### 5. Trending Movies

**Trending Today:**
```javascript
GET /trending/movie/day?api_key=${API_KEY}
```

**Trending This Week:**
```javascript
GET /trending/movie/week?api_key=${API_KEY}
```

**Example:**
```javascript
fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=95a08eadc472f7ab8f7ac10cfe63027a')
```

---

### 6. Search Movies
Search for movies by title.

```javascript
GET /search/movie?api_key=${API_KEY}&query=inception&page=1
```

**Example:**
```javascript
const searchQuery = 'inception';
fetch(`https://api.themoviedb.org/3/search/movie?api_key=95a08eadc472f7ab8f7ac10cfe63027a&query=${searchQuery}`)
```

---

### 7. Movie Details
Get detailed information about a specific movie.

```javascript
GET /movie/{movie_id}?api_key=${API_KEY}&language=en-US
```

**Example:**
```javascript
const movieId = 550; // Fight Club
fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=95a08eadc472f7ab8f7ac10cfe63027a`)
```

---

## 🔍 Discover API

The most powerful endpoint for filtering and discovering movies.

**Base Endpoint:**
```javascript
GET /discover/movie?api_key=${API_KEY}
```

### Filter by Year (e.g., 2025)
```javascript
GET /discover/movie?api_key=${API_KEY}&primary_release_year=2025&sort_by=popularity.desc
```

### Filter by Genre (e.g., Action)
```javascript
GET /discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc
```

### Filter by Rating Range
```javascript
// Movies with rating >= 8.0
GET /discover/movie?api_key=${API_KEY}&vote_average.gte=8.0&sort_by=vote_average.desc

// Movies with rating between 7.0 and 9.0
GET /discover/movie?api_key=${API_KEY}&vote_average.gte=7.0&vote_average.lte=9.0
```

### Filter by Release Date Range
```javascript
// Movies released in 2025
GET /discover/movie?api_key=${API_KEY}&primary_release_date.gte=2025-01-01&primary_release_date.lte=2025-12-31
```

### Combine Multiple Filters
```javascript
// Action movies from 2025 with rating >= 7
GET /discover/movie?api_key=${API_KEY}&primary_release_year=2025&with_genres=28&vote_average.gte=7&sort_by=popularity.desc
```

---

## 🎭 Genre IDs

Use these IDs with the `with_genres` parameter:

| Genre | ID |
|-------|-----|
| Action | 28 |
| Adventure | 12 |
| Animation | 16 |
| Comedy | 35 |
| Crime | 80 |
| Documentary | 99 |
| Drama | 18 |
| Family | 10751 |
| Fantasy | 14 |
| History | 36 |
| Horror | 27 |
| Music | 10402 |
| Mystery | 9648 |
| Romance | 10749 |
| Science Fiction | 878 |
| TV Movie | 10770 |
| Thriller | 53 |
| War | 10752 |
| Western | 37 |

**Example - Multiple Genres:**
```javascript
// Action + Thriller movies
GET /discover/movie?api_key=${API_KEY}&with_genres=28,53
```

---

## 📊 Advanced Filtering

### Sort Options
Use with `sort_by` parameter:

- `popularity.desc` - Most popular first
- `popularity.asc` - Least popular first
- `release_date.desc` - Newest first
- `release_date.asc` - Oldest first
- `vote_average.desc` - Highest rated first
- `vote_average.asc` - Lowest rated first
- `revenue.desc` - Highest revenue first
- `vote_count.desc` - Most voted first

**Example:**
```javascript
GET /discover/movie?api_key=${API_KEY}&sort_by=revenue.desc
```

### Filter by Language
```javascript
// Only English movies
GET /discover/movie?api_key=${API_KEY}&with_original_language=en

// Only Hindi movies
GET /discover/movie?api_key=${API_KEY}&with_original_language=hi
```

### Filter by Runtime
```javascript
// Movies longer than 120 minutes
GET /discover/movie?api_key=${API_KEY}&with_runtime.gte=120

// Movies between 90 and 120 minutes
GET /discover/movie?api_key=${API_KEY}&with_runtime.gte=90&with_runtime.lte=120
```

---

## 🎯 Common Parameters

### Available for Most Endpoints:

| Parameter | Description | Example |
|-----------|-------------|---------|
| `api_key` | Your API key (required) | `api_key=YOUR_KEY` |
| `language` | Response language | `language=en-US` |
| `page` | Page number (20 results per page) | `page=1` |
| `region` | ISO 3166-1 country code | `region=US` |

### Discover-Specific Parameters:

| Parameter | Description | Example |
|-----------|-------------|---------|
| `primary_release_year` | Filter by release year | `primary_release_year=2025` |
| `primary_release_date.gte` | Min release date | `primary_release_date.gte=2025-01-01` |
| `primary_release_date.lte` | Max release date | `primary_release_date.lte=2025-12-31` |
| `with_genres` | Filter by genre IDs | `with_genres=28,53` |
| `vote_average.gte` | Minimum rating | `vote_average.gte=7.0` |
| `vote_average.lte` | Maximum rating | `vote_average.lte=9.0` |
| `vote_count.gte` | Minimum vote count | `vote_count.gte=1000` |
| `with_runtime.gte` | Minimum runtime (minutes) | `with_runtime.gte=90` |
| `with_runtime.lte` | Maximum runtime (minutes) | `with_runtime.lte=120` |
| `with_original_language` | Filter by language | `with_original_language=en` |
| `sort_by` | Sort results | `sort_by=popularity.desc` |

---

## 💡 Practical Examples

### Example 1: Bollywood Movies from 2090
```javascript
fetch('https://api.themoviedb.org/3/discover/movie?api_key=95a08eadc472f7ab8f7ac10cfe63027a&with_original_language=hi&primary_release_year=2090&sort_by=popularity.desc')
```

### Example 2: Highly Rated Action Movies
```javascript
fetch('https://api.themoviedb.org/3/discover/movie?api_key=95a08eadc472f7ab8f7ac10cfe63027a&with_genres=28&vote_average.gte=7.5&vote_count.gte=1000&sort_by=vote_average.desc')
```

### Example 3: Short Comedy Movies (under 100 minutes)
```javascript
fetch('https://api.themoviedb.org/3/discover/movie?api_key=95a08eadc472f7ab8f7ac10cfe63027a&with_genres=35&with_runtime.lte=100&sort_by=popularity.desc')
```

### Example 4: Horror Movies Released in October 2090
```javascript
fetch('https://api.themoviedb.org/3/discover/movie?api_key=95a08eadc472f7ab8f7ac10cfe63027a&with_genres=27&primary_release_date.gte=2090-10-01&primary_release_date.lte=2090-10-31&sort_by=release_date.desc')
```

### Example 5: Top 20 Movies of All Time
```javascript
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=95a08eadc472f7ab8f7ac10cfe63027a&page=1')
```

### Example 6: Movies Released in 2025
```javascript
fetch('https://api.themoviedb.org/3/discover/movie?api_key=95a08eadc472f7ab8f7ac10cfe63027a&primary_release_year=2025&sort_by=release_date.desc')
```

---

## 🖼️ Getting Images

**Poster Images:**
```javascript
const IMG_BASE = 'https://image.tmdb.org/t/p/w500';
const posterPath = movie.poster_path; // from API response
const fullPosterURL = `${IMG_BASE}${posterPath}`;
```

**Image Sizes Available:**
- `w92` - Very small
- `w154` - Small
- `w185` - Small-Medium
- `w342` - Medium
- `w500` - Large (recommended)
- `w780` - Very large
- `original` - Full size

---

## 🔗 Useful Links

- **Official Documentation:** https://developer.themoviedb.org/docs
- **API Reference:** https://developer.themoviedb.org/reference
- **Your API Settings:** https://www.themoviedb.org/settings/api

---

## ⚠️ Important Notes

1. **Rate Limits:** 40 requests per 10 seconds
2. **Attribution:** Display TMDB logo on your site
3. **Free for Personal Use:** Commercial use requires approval
4. **Cache Results:** Don't request same data repeatedly
5. **Language Code:** Use `en-US` for English content

---

## 🎓 Quick Start Template

```javascript
const API_KEY = '95a08eadc472f7ab8f7ac10cfe63027a';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// Function to fetch any endpoint
async function fetchMovies(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Example usage
const popularMovies = await fetchMovies(`/movie/popular?api_key=${API_KEY}`);
const movies2025 = await fetchMovies(`/discover/movie?api_key=${API_KEY}&primary_release_year=2025`);
const actionMovies = await fetchMovies(`/discover/movie?api_key=${API_KEY}&with_genres=28`);
```

---

**Created for:** Movie Website Practice Project  
**Last Updated:** October 2025  
**API Version:** v3

Happy Coding! 🚀


Card desing
*************html
  // Popular TV shows (works)
https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}

  TV shows by genre (use discover)
`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=18` // Drama
`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=10765` // Sci-Fi & Fantasy
`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=80 `// Crime

`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28` // Action movies
`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27` // Horror movies

genre type //
 Action (genre_id: 28)
Adventure (genre_id: 12)
Animation (genre_id: 16)
Comedy (genre_id: 35)
Crime (genre_id: 80)
Documentary (genre_id: 99)
Drama (genre_id: 18)
Family (genre_id: 10751)
Fantasy (genre_id: 14)
History (genre_id: 36)
Horror (genre_id: 27)
Music (genre_id: 10402)
Mystery (genre_id: 9648)
Romance (genre_id: 10749)
Science Fiction (genre_id: 878)
TV Movie (genre_id: 10770)
Thriller (genre_id: 53)
War (genre_id: 10752)
Western (genre_id: 37)  

## trendign movie
Top Rated - https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY&page=1


https://api.themoviedb.org/3/trending/movie/day or /week?api_key=YOUR_API_KEY&page=1
trendign tv


https://api.themoviedb.org/3/tv/airing_today
https://api.themoviedb.org/3/tv/on_the_air

# Trailer 
// For movies
const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;

// For TV shows
const videoUrl = `https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${apiKey}&language=en-US`;

# Streamer Provider
// For movies
const watchUrl = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${apiKey}`;

// For TV shows
const watchUrl = `https://api.themoviedb.org/3/tv/${tvId}/watch/providers?api_key=${apiKey}`;

# Cast info
// For movies
const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

// For TV shows
const creditsUrl = `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${apiKey}`;

// Popular Movies
<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
</svg>

// Highest Rated / Top Rated
<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.90L14.81 8.63L12 2L9.19 8.63L2 9.90L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
</svg>

// Weekly Trending / Trending
<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="currentColor"/>
</svg>

// On Air Series / TV Series
<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.9 22.1 3 21 3ZM21 17H3V5H21V17ZM16 11L9 15V7L16 11Z" fill="currentColor"/>
</svg>