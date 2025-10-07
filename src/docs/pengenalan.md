# 🚀 Pengenalan RenzmcLang

**RenzmcLang** adalah bahasa pemrograman modern berbasis Bahasa Indonesia yang dirancang untuk memudahkan pembelajaran pemrograman sambil tetap menyediakan fitur-fitur powerful untuk development profesional.

## ✨ Mengapa RenzmcLang?

### 1. **Sintaks Bahasa Indonesia yang Natural**
Tulis kode dengan bahasa yang Anda pahami sehari-hari. Tidak perlu menghafal keyword bahasa Inggris yang asing.

```python
// Contoh kode RenzmcLang
nama itu "Budi"
umur itu 25

jika umur >= 18
    tampilkan "Dewasa"
kalau_tidak
    tampilkan "Anak-anak"
selesai
```

### 2. **Fitur Modern & Powerful**
- **JIT Compiler** - Kompilasi otomatis untuk performa 10-100x lebih cepat
- **Type System** - Type hints opsional untuk kode yang lebih aman
- **Async/Await** - Pemrograman asynchronous yang mudah
- **OOP Lengkap** - Class, inheritance, dan polymorphism
- **Lambda & Comprehensions** - Functional programming yang elegant

### 3. **Integrasi Python Sempurna**
Akses seluruh ekosistem Python langsung dari RenzmcLang:

```python
// Import library Python
impor_python "requests"
impor_python "pandas"

// Gunakan langsung
response itu panggil_python requests.get("https://api.example.com")
data itu panggil_python pandas.read_csv("data.csv")
```

### 4. **Built-in Functions Lengkap**
Lebih dari 184+ fungsi bawaan untuk berbagai kebutuhan:
- String manipulation
- Math & statistics
- File operations
- HTTP client
- JSON utilities
- Database operations
- Dan banyak lagi!

## 🎯 Untuk Siapa RenzmcLang?

### Pemula
Belajar programming dengan bahasa yang familiar. Fokus pada logika, bukan menghafal keyword.

### Pelajar & Mahasiswa
Implementasi algoritma dan struktur data dengan sintaks yang mudah dipahami.

### Developer Profesional
Rapid prototyping dan automation dengan fitur modern dan performa tinggi.

### Data Scientist
Analisis data dengan JIT acceleration dan integrasi Python yang seamless.

## 🚀 Mulai Cepat

### Instalasi
```bash
pip install renzmc
```

### Program Pertama
Buat file `hello.rmc`:
```python
tampilkan "Hello, World!"
tampilkan "Selamat datang di RenzmcLang!"
```

Jalankan:
```bash
renzmc hello.rmc
```

### Contoh Lengkap
```python
// Fungsi untuk menghitung faktorial
fungsi faktorial(n):
    jika n <= 1
        hasil 1
    selesai
    hasil n * faktorial(n - 1)
selesai

// Hitung faktorial 5
hasil itu faktorial(5)
tampilkan f"Faktorial 5 = {hasil}"

// List comprehension
angka itu [1, 2, 3, 4, 5]
kuadrat itu [x * x untuk setiap x dari angka]
tampilkan f"Kuadrat: {kuadrat}"

// HTTP request
response itu http_get("https://api.github.com/users/renzmc")
jika response.ok()
    data itu response.json()
    tampilkan f"User: {data['name']}"
selesai
```

## 📚 Apa Selanjutnya?

1. **[Instalasi](instalasi)** - Panduan instalasi lengkap
2. **[Sintaks Dasar](sintaks-dasar)** - Pelajari sintaks fundamental
3. **[Fungsi Built-in](fungsi-builtin)** - Eksplorasi 184+ fungsi bawaan
4. **[Fitur Lanjutan](fitur-lanjutan)** - OOP, Async, dan fitur advanced
5. **[Contoh Program](contoh)** - 99+ contoh program siap pakai

## 💡 Tips Belajar

1. **Mulai dari Dasar** - Pahami variabel, tipe data, dan control flow
2. **Praktik Langsung** - Jalankan contoh-contoh yang ada
3. **Eksperimen** - Modifikasi kode dan lihat hasilnya
4. **Baca Error** - Error message RenzmcLang sangat helpful
5. **Gunakan Extension VSCode** - Syntax highlighting dan auto-completion

## 🌟 Filosofi RenzmcLang

> "Coding in your native language, thinking in your native way"

RenzmcLang percaya bahwa bahasa pemrograman seharusnya tidak menjadi penghalang dalam belajar. Dengan menggunakan Bahasa Indonesia, kita bisa fokus pada logika dan problem solving, bukan menghafal keyword asing.

## 🤝 Komunitas

- **GitHub**: [github.com/RenzMc/RenzmcLang](https://github.com/RenzMc/RenzmcLang)
- **PyPI**: [pypi.org/project/renzmc](https://pypi.org/project/renzmc/)
- **Email**: renzaja11@gmail.com

---

**Siap memulai? Mari kita coding dengan bahasa kita sendiri! 🚀**