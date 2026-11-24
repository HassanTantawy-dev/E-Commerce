# Luli Kids — E-Commerce Front-End

A multi-page storefront for kids' clothing, built with plain **HTML, CSS and JavaScript** on top of **Bootstrap 5**. No framework and no backend — this is the complete front-end, with each screen as its own page.

## Pages

| Page | What it does |
| :--- | :--- |
| `Home-Page.html` | Landing page: hero, categories, and featured products |
| `girl clothes.html` | Product listing |
| `cart.html` | Shopping cart with items, quantities and totals |
| `Empty-card.html` | Empty-cart state |
| `fav.html` | Wishlist / favourites |
| `check out.html` | Checkout form |
| `signup.html` | Registration |
| `profile1.html`, `profile2.html` | User profile screens |
| `account details.html` | Account settings |
| `Address.html`, `location.html` | Saved addresses and delivery location |

## Features

- Responsive layout across all pages (Bootstrap grid + custom CSS)
- Cart and wishlist screens with quantity and total handling
- Full user flow: register → browse → add to cart → checkout
- Scroll animations with **Animate.css**
- Icons via **Font Awesome**
- Reusable stylesheets: `style.css` for shared rules, one CSS file per page for its own layout

## Stack

`HTML5` · `CSS3` · `JavaScript (ES6)` · `Bootstrap 5` · `Animate.css` · `Font Awesome`

## Run it

No build step. Clone the repo and open the pages:

```bash
git clone https://github.com/HassanTantawy-dev/E-Commerce.git
cd E-Commerce
# open Html/Home-Page.html in your browser, or serve the folder:
python -m http.server 8000
```

Then go to `http://localhost:8000/Html/Home-Page.html`.

> Pages reference the stylesheets with `../css/...`, so opening the HTML files directly from disk works, but serving the folder is cleaner.

## Structure

```
Html/     one file per screen
css/      bootstrap, font awesome, shared and per-page styles
js/       page behaviour
Img/      product and UI images
```

## What this project is not

There is no server, database or payment integration — the cart and account screens are front-end only. Adding a real backend (Laravel or Node with a MySQL schema) is the natural next step.
