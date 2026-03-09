# Strona Kodnika

Prosta strona informacyjna o **Kodniku** – edytorze z AI (Python, tkinter, Ollama) oraz o rozróżnieniu: produkt dla klienta vs wersja studia.

## Zawartość

- **Czym jest Kodnik** – edytor z AI, zwierzaki, ZAP.NAUK; produkt na wzór Kodnika BETA, ale bez treningu
- **Cztery zwierzaki** – Mamut, Małpa, Gepard, Lis (role i opisy)
- **Kodnik dla klienta** – co dostaje klient: edytor, persony, ZAP.NAUK, Ollama – bez pipeline’u treningu
- **Kodnik BETA – wersja studia** – wewnętrzna wersja z pełnym pipeline’em treningu neuronowego (przemiał, psucie, pary zadań, run 1/2); tylko dla studia

Treść jest zsynchronizowana z dokumentacją z projektu **Kodnik BETA** (`C:\Kodnik BETA`), m.in. `docs/CURSOR-PROJEKT-KODNIK-JAK-OGARNAC.md` i `role_zwierzakow.py`.

## Uruchomienie

Otwórz plik `index.html` w przeglądarce (podwójne kliknięcie lub „Otwórz w przeglądarce”). Strona działa offline; fonty są ładowane z Google Fonts (Outfit, JetBrains Mono).

Alternatywnie z terminala (jeśli masz Pythona):

```bash
cd "c:\Users\ujot\OneDrive\Pulpit\Strona Kodnika"
python -m http.server 8080
```

Potem wejdź na: http://localhost:8080

## Pliki

- `index.html` – struktura strony
- `style.css` – styl (ciemny motyw, responsywny layout)
- `README.md` – ten plik
