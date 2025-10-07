# 📝 Sintaks Dasar RenzmcLang

Panduan lengkap sintaks fundamental RenzmcLang untuk pemula hingga menengah.

## 💬 Komentar

Komentar adalah teks yang diabaikan oleh interpreter, berguna untuk dokumentasi.

### Single Line Comment

```python
// Ini komentar dengan double slash
# Ini juga komentar dengan hash
-- Ini komentar dengan double dash

tampilkan "Hello"  // Komentar di akhir baris
```

### Multi Line Comment

```python
/*
Ini adalah komentar
yang bisa lebih dari
satu baris
*/

tampilkan "Hello, World!"
```

## 📦 Variabel dan Tipe Data

### Deklarasi Variabel

Gunakan keyword `itu` untuk assignment:

```python
nama itu "Budi"
umur itu 25
tinggi itu 175.5
is_student itu benar
```

### Tipe Data Dasar

#### 1. String (Teks)

```python
// Single quotes
nama itu 'Budi'

// Double quotes
pesan itu "Hello, World!"

// Triple quotes (multi-line)
teks_panjang itu """
Ini adalah teks
yang bisa lebih dari
satu baris
"""

// F-string (formatted string)
nama itu "Budi"
umur itu 25
pesan itu f"Nama: {nama}, Umur: {umur}"
tampilkan pesan  // Output: Nama: Budi, Umur: 25
```

#### 2. Number (Angka)

```python
// Integer (bilangan bulat)
umur itu 25
jumlah itu -10
besar itu 1000000

// Float (bilangan desimal)
tinggi itu 175.5
berat itu 68.3
pi itu 3.14159

// Scientific notation
besar itu 1e6      // 1000000
kecil itu 1.5e-3   // 0.0015
```

#### 3. Boolean (Logika)

```python
// Nilai boolean
is_active itu benar    // true
is_done itu salah      // false

// Dari perbandingan
hasil itu 5 > 3        // benar
cek itu 10 == 5        // salah
```

#### 4. None (Kosong)

```python
data itu kosong        // None/null
nilai itu nihil        // None/null
```

### List (Array)

List adalah koleksi terurut yang bisa diubah:

```python
// List kosong
daftar itu []

// List dengan data
angka itu [1, 2, 3, 4, 5]
nama itu ["Budi", "Ani", "Citra"]
campur itu [1, "dua", 3.0, benar]

// Akses elemen (index mulai dari 0)
pertama itu angka[0]      // 1
kedua itu angka[1]        // 2
terakhir itu angka[-1]    // 5

// Slicing
bagian itu angka[1:4]     // [2, 3, 4]
awal itu angka[:3]        // [1, 2, 3]
akhir itu angka[2:]       // [3, 4, 5]

// Modifikasi
angka[0] itu 10           // Ubah elemen pertama
tambah(angka, 6)          // Tambah elemen baru
```

### Dictionary (Object)

Dictionary adalah koleksi key-value:

```python
// Dictionary kosong
data itu {}

// Dictionary dengan data
profil itu {
    "nama": "Budi",
    "umur": 25,
    "kota": "Jakarta"
}

// Akses nilai
nama itu profil["nama"]           // "Budi"
umur itu profil["umur"]           // 25

// Modifikasi
profil["umur"] itu 26             // Ubah nilai
profil["email"] itu "budi@mail.com"  // Tambah key baru

// Nested dictionary
mahasiswa itu {
    "nama": "Budi",
    "nilai": {
        "matematika": 85,
        "fisika": 90
    }
}

nilai_mtk itu mahasiswa["nilai"]["matematika"]  // 85
```

### Tuple (Immutable List)

Tuple seperti list tapi tidak bisa diubah:

```python
// Tuple dengan syntax khusus
koordinat itu (| 10, 20 |)
warna itu (| "merah", "hijau", "biru" |)

// Akses elemen
x itu koordinat[0]        // 10
y itu koordinat[1]        // 20

// Unpacking
x, y itu koordinat        // x=10, y=20
```

### Set (Himpunan)

Set adalah koleksi unik tanpa duplikat:

```python
// Set dengan syntax khusus
angka itu {| 1, 2, 3, 4, 5 |}
huruf itu {| "a", "b", "c" |}

// Set otomatis menghapus duplikat
angka itu {| 1, 2, 2, 3, 3, 3 |}  // Hasil: {| 1, 2, 3 |}
```

## 🔢 Operator

### Operator Aritmatika

```python
a itu 10
b itu 3

tambah itu a + b      // 13 (penjumlahan)
kurang itu a - b      // 7 (pengurangan)
kali itu a * b        // 30 (perkalian)
bagi itu a / b        // 3.333... (pembagian)
bagi_bulat itu a // b // 3 (pembagian bulat)
sisa itu a % b        // 1 (modulo/sisa bagi)
pangkat itu a ** b    // 1000 (pangkat)
```

### Operator Perbandingan

```python
a itu 10
b itu 5

sama itu a == b           // salah (sama dengan)
tidak_sama itu a != b     // benar (tidak sama dengan)
lebih_besar itu a > b     // benar (lebih besar)
lebih_kecil itu a < b     // salah (lebih kecil)
lebih_sama itu a >= b     // benar (lebih besar atau sama)
kurang_sama itu a <= b    // salah (lebih kecil atau sama)
```

### Operator Logika

```python
a itu benar
b itu salah

dan_hasil itu a dan b         // salah (AND)
atau_hasil itu a atau b       // benar (OR)
tidak_hasil itu tidak a       // salah (NOT)

// Kombinasi
hasil itu (a dan b) atau (tidak b)  // benar
```

### Operator Assignment

```python
x itu 10

x += 5    // x = x + 5  → 15
x -= 3    // x = x - 3  → 12
x *= 2    // x = x * 2  → 24
x /= 4    // x = x / 4  → 6
x %= 4    // x = x % 4  → 2
x **= 3   // x = x ** 3 → 8
```

### Operator Membership

```python
daftar itu [1, 2, 3, 4, 5]

ada itu 3 dalam daftar           // benar
tidak_ada itu 10 tidak dalam daftar  // benar
```

### Operator Ternary

```python
umur itu 20
status itu "Dewasa" jika umur >= 18 kalau tidak "Anak-anak"
tampilkan status  // Output: Dewasa

// Dengan ekspresi kompleks
nilai itu 75
grade itu "A" jika nilai >= 80 kalau tidak "B" jika nilai >= 70 kalau tidak "C"
```

## 🔀 Control Flow

### If-Else Statement

```python
umur itu 20

// If sederhana
jika umur >= 18
    tampilkan "Dewasa"
selesai

// If-else
jika umur >= 18
    tampilkan "Dewasa"
kalau_tidak
    tampilkan "Anak-anak"
selesai

// If-elif-else
nilai itu 85

jika nilai >= 90
    tampilkan "Grade: A"
kalau_tidak_jika nilai >= 80
    tampilkan "Grade: B"
kalau_tidak_jika nilai >= 70
    tampilkan "Grade: C"
kalau_tidak
    tampilkan "Grade: D"
selesai

// Nested if
umur itu 25
punya_sim itu benar

jika umur >= 17
    jika punya_sim
        tampilkan "Boleh menyetir"
    kalau_tidak
        tampilkan "Harus punya SIM dulu"
    selesai
kalau_tidak
    tampilkan "Belum cukup umur"
selesai
```

### Switch-Case (Pattern Matching)

```python
hari itu 3

cocok hari
    kasus 1:
        tampilkan "Senin"
    kasus 2:
        tampilkan "Selasa"
    kasus 3:
        tampilkan "Rabu"
    kasus 4:
        tampilkan "Kamis"
    kasus 5:
        tampilkan "Jumat"
    bawaan:
        tampilkan "Akhir pekan"
selesai

// Dengan kondisi
nilai itu 85

cocok nilai
    kasus n jika n >= 90:
        tampilkan "Excellent!"
    kasus n jika n >= 80:
        tampilkan "Good!"
    kasus n jika n >= 70:
        tampilkan "Fair"
    bawaan:
        tampilkan "Need improvement"
selesai
```

## 🔁 Loops (Perulangan)

### For Loop

```python
// Range sederhana (1 sampai 10)
untuk i dari 1 sampai 10
    tampilkan i
selesai

// Range dengan step
untuk i dari 0 sampai 20 dengan langkah 2
    tampilkan i  // 0, 2, 4, 6, ..., 20
selesai

// Iterasi list
nama itu ["Budi", "Ani", "Citra"]
untuk setiap orang dari nama
    tampilkan f"Halo, {orang}!"
selesai

// Dengan index
untuk setiap i, nama dari enumerate(nama)
    tampilkan f"{i + 1}. {nama}"
selesai

// Iterasi dictionary
profil itu {"nama": "Budi", "umur": 25, "kota": "Jakarta"}
untuk setiap key, value dari items(profil)
    tampilkan f"{key}: {value}"
selesai
```

### While Loop

```python
// While sederhana
counter itu 0
selama counter < 5
    tampilkan counter
    counter += 1
selesai

// While dengan kondisi kompleks
angka itu 1
selama angka <= 100 dan angka % 7 != 0
    angka += 1
selesai
tampilkan f"Angka pertama habis dibagi 7: {angka}"

// Infinite loop dengan break
selama benar
    input_user itu input("Ketik 'exit' untuk keluar: ")
    jika input_user == "exit"
        berhenti
    selesai
    tampilkan f"Anda mengetik: {input_user}"
selesai
```

### Loop Control

```python
// Break - keluar dari loop
untuk i dari 1 sampai 10
    jika i == 5
        berhenti  // Keluar dari loop
    selesai
    tampilkan i
selesai
// Output: 1, 2, 3, 4

// Continue - skip iterasi
untuk i dari 1 sampai 10
    jika i % 2 == 0
        lanjut  // Skip angka genap
    selesai
    tampilkan i
selesai
// Output: 1, 3, 5, 7, 9

// Nested loop dengan break
untuk i dari 1 sampai 5
    untuk j dari 1 sampai 5
        jika i * j > 10
            berhenti
        selesai
        tampilkan f"{i} x {j} = {i * j}"
    selesai
selesai
```

## 📞 Functions (Fungsi)

### Deklarasi Fungsi

```python
// Fungsi sederhana
fungsi sapa():
    tampilkan "Hello, World!"
selesai

// Panggil fungsi
sapa()

// Fungsi dengan parameter
fungsi sapa_nama(nama):
    tampilkan f"Halo, {nama}!"
selesai

sapa_nama("Budi")  // Output: Halo, Budi!

// Fungsi dengan return value
fungsi tambah(a, b):
    hasil a + b
selesai

total itu tambah(5, 3)
tampilkan total  // Output: 8

// Fungsi dengan multiple parameters
fungsi hitung_luas_persegi_panjang(panjang, lebar):
    luas itu panjang * lebar
    hasil luas
selesai

luas itu hitung_luas_persegi_panjang(10, 5)
tampilkan f"Luas: {luas}"  // Output: Luas: 50
```

### Default Parameters

```python
fungsi sapa(nama, sapaan):
    tampilkan f"{sapaan}, {nama}!"
selesai

// Dengan default value (menggunakan Python integration)
fungsi sapa_default(nama, sapaan="Halo"):
    tampilkan f"{sapaan}, {nama}!"
selesai

sapa_default("Budi")              // Output: Halo, Budi!
sapa_default("Ani", "Selamat pagi")  // Output: Selamat pagi, Ani!
```

### Lambda Functions

```python
// Lambda sederhana
kuadrat itu lambda dengan x -> x * x
tampilkan kuadrat(5)  // Output: 25

// Lambda dengan map
angka itu [1, 2, 3, 4, 5]
hasil itu map(lambda dengan x -> x * 2, angka)
tampilkan hasil  // Output: [2, 4, 6, 8, 10]

// Lambda dengan filter
genap itu filter(lambda dengan x -> x % 2 == 0, angka)
tampilkan genap  // Output: [2, 4]

// Lambda dengan sort
data itu [{"nama": "Budi", "umur": 25}, {"nama": "Ani", "umur": 22}]
sorted_data itu sorted(data, key=lambda dengan x -> x["umur"])
```

## 📊 Comprehensions

### List Comprehension

```python
// Basic list comprehension
angka itu [1, 2, 3, 4, 5]
kuadrat itu [x * x untuk setiap x dari angka]
tampilkan kuadrat  // Output: [1, 4, 9, 16, 25]

// Dengan kondisi
genap itu [x untuk setiap x dari angka jika x % 2 == 0]
tampilkan genap  // Output: [2, 4]

// Nested comprehension
matrix itu [[i * j untuk setiap j dari [1, 2, 3]] untuk setiap i dari [1, 2, 3]]
// Output: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
```

### Dictionary Comprehension

```python
// Basic dict comprehension
angka itu [1, 2, 3, 4, 5]
kuadrat_dict itu {x: x * x untuk setiap x dari angka}
tampilkan kuadrat_dict  // Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

// Dengan kondisi
genap_dict itu {x: x * x untuk setiap x dari angka jika x % 2 == 0}
tampilkan genap_dict  // Output: {2: 4, 4: 16}
```

## 🎯 Best Practices

### 1. Naming Conventions

```python
// ✅ Good - descriptive names
nama_lengkap itu "Budi Santoso"
total_harga itu 150000
is_active itu benar

// ❌ Bad - unclear names
x itu "Budi Santoso"
t itu 150000
flag itu benar
```

### 2. Code Organization

```python
// ✅ Good - organized and readable
fungsi hitung_total_belanja(items):
    total itu 0
    untuk setiap item dari items
        total += item["harga"]
    selesai
    hasil total
selesai

// ❌ Bad - messy
fungsi x(y):total itu 0
untuk setiap z dari y:total+=z["harga"]
selesai
hasil total
selesai
```

### 3. Comments

```python
// ✅ Good - helpful comments
// Hitung diskon berdasarkan total belanja
fungsi hitung_diskon(total):
    jika total >= 100000
        hasil total * 0.1  // Diskon 10%
    selesai
    hasil 0
selesai

// ❌ Bad - obvious comments
// Tambah 1 ke x
x += 1
```

## 📚 Latihan

Coba buat program sederhana untuk:

1. **Kalkulator** - Input 2 angka dan operasi, tampilkan hasil
2. **Cek Bilangan Prima** - Input angka, cek apakah prima
3. **Tabel Perkalian** - Input angka, tampilkan tabel perkalian
4. **Daftar Belanja** - Buat list belanja dengan harga, hitung total

---

**Lanjut ke [Fungsi Built-in](fungsi-builtin) untuk mempelajari 184+ fungsi bawaan! 🚀**