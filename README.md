# ZaslugaBet iPhone PWA

Bu klasör, mevcut canlı Streamlit uygulamasını iPhone'da ayrı bir ZaslugaBet web-app kabuğu içinde açar.

## GitHub Pages ile yayınlama

1. GitHub'da yeni bir repository oluştur: `ZaslugaBet-iPhone`
2. Bu ZIP'in içindeki TÜM dosya ve klasörleri repo köküne yükle.
3. Repo: Settings → Pages
4. Build and deployment:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /(root)
5. Save.
6. GitHub sana `https://KULLANICI.github.io/ZaslugaBet-iPhone/` benzeri bir adres verir.

## iPhone'a kurma

1. GitHub Pages adresini iPhone'da Safari ile aç.
2. Paylaş simgesi → Ana Ekrana Ekle.
3. İsim `ZaslugaBet` olarak görünür.
4. Ana ekrandaki ZaslugaBet ikonundan aç.

Not:
- App Store gerekmez.
- İnternet gerekir; analiz motoru Streamlit sunucusunda çalışır.
- İçeride kullanılan canlı uygulama:
  https://zaslugabet.streamlit.app/?embed=true
