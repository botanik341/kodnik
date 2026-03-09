# Styl Kodnika – żeby wszystko było w jednym charakterze

Użyj tych samych kolorów, fontów i logo na **stronie**, w **ikonie** (favicon) i w **programie** (aplikacja desktop). Wtedy strona, zakładka w przeglądarce i okno programu będą wyglądać jak jedna marka.

---

## Nazwa

- **Napis:** zawsze **„Kodnik”** (jedna wielka litera K, reszta małe).
- Na stronie i w programie pisz tak samo.

---

## Logo

- **Plik:** `assets/kodnik-lodka-granat.png` (łódka, kolor **ciemny granat** `#0d1219`).
- **Gdzie używać:** nagłówek strony (tylko ikona), favicon, ikona aplikacji (exe / skrót).
- Tło obrazka: **przezroczyste** (bez kwadratu), żeby logo komponowało się z tłem.
- **W hero:** łódka obok wielkiego napisu „Kodnik” (ten sam kolor `#0d1219`).

---

## Kolory (hex)

Skopiuj do programu (np. tkinter) te same wartości:

| Zastosowanie | Hex | Uwagi |
|--------------|-----|--------|
| Tło główne | `#0d0a0a` | Prawie czarny |
| Tło kart / okien | `#140e0a` lub rgba(20, 14, 10, 0.92) | Ciemny brąz |
| Tekst główny | `#f0ebe6` | Jasny krem |
| Tekst przygaszony | `#b8a99a` | Szary‑bursztynowy |
| **Akcent (główny)** | `#f7931e` | Pomarańcz / bursztyn |
| **Akcent jasny** | `#ffb347` | Bursztyn jasny |
| **Ogień** | `#ff6b35` | Czerwono‑pomarańcz |
| Mamut (kod) | `#e8a84c` | Bursztyn |
| Małpa (FiveM) | `#4db8a8` | Turkus |
| **Logo i napis „Kodnik” (hero)** | `#0d1219` | Ciemny granat |
| Obramowanie | rgba(255, 120, 50, 0.3) | Delikatny pomarańcz |

W programie: przyciski, nagłówki, linki – w kolorze **#f7931e** lub **#ffb347**, żeby było w tym samym stylu co strona.

---

## Fonty

- **Tekst (nagłówki, opis):** **Outfit**  
  - Google Fonts: `Outfit`, wagi 400, 500, 600, 700, 800.
- **Kod / techniczne:** **JetBrains Mono**  
  - Wagi 400, 600, 700.

**Napis „Kodnik” (w hero – wielki tytuł obok łódki):**  
- Font: **JetBrains Mono**, bold (800).  
- Kolor: `#0d1219` (ciemny granat).  
- Rozmiar na stronie: clamp(3.2rem, 11vw, 5rem).  
- Letter-spacing: -0.04em.  
- W nagłówku strony jest tylko ikona łódki (bez napisu). W hero: łódka + napis „Kodnik” w jednym rzędzie.

W programie (tkinter): jeśli nie dasz rady wgrać Outfit, użyj np. **Segoe UI** dla tekstu i **Consolas** / **JetBrains Mono** dla kodu – i tych samych kolorów co wyżej.

---

## Układ: logo + napis „Kodnik”

- **Nagłówek:** tylko ikona łódki (32 px), bez napisu.
- **Hero (strona główna):** łódka + wielki napis „Kodnik” w jednym rzędzie, kolor `#0d1219`.
- Odstęp między łódką a napisem: ok. 12–20 px.
- Wysokość łódki w hero: 48–64 px; w nagłówku: 32 px.

---

## Podsumowanie

- **Strona:** favicon i ikona w nagłówku = `kodnik-lodka-granat.png`. Wielki napis „Kodnik” w hero = JetBrains Mono, `#0d1219`.
- **Ikona aplikacji:** ten sam plik `kodnik-lodka-granat.png`.
- **Program:** ten sam kolor (#0d1219) i font (JetBrains Mono) dla napisu „Kodnik”, ta sama łódka obok.
