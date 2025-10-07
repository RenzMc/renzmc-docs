# 📦 Fungsi Built-in RenzmcLang

RenzmcLang menyediakan **184+ fungsi bawaan** yang siap pakai untuk berbagai kebutuhan programming. Semua fungsi tersedia langsung tanpa perlu import.

## 📋 Kategori Fungsi

1. [String Functions](#-string-functions) - 40+ fungsi
2. [Math & Statistics](#-math--statistics) - 30+ fungsi
3. [List & Dict Operations](#-list--dict-operations) - 25+ fungsi
4. [File Operations](#-file-operations) - 20+ fungsi
5. [JSON Utilities](#-json-utilities) - 4 fungsi
6. [HTTP Functions](#-http-functions) - 10+ fungsi
7. [System Functions](#-system-functions) - 15+ fungsi
8. [Type Conversion](#-type-conversion) - 10+ fungsi
9. [Iteration Functions](#-iteration-functions) - 10+ fungsi
10. [Utility Functions](#-utility-functions) - 20+ fungsi

---

## 🔤 String Functions

### Manipulasi Dasar

#### `panjang(string)` / `len(string)`
Mengembalikan panjang string.

```python
teks itu "Hello"
panjang_teks itu panjang(teks)  // 5
```

#### `huruf_besar(string)` / `upper(string)`
Mengubah semua huruf menjadi kapital.

```python
teks itu "hello world"
besar itu huruf_besar(teks)  // "HELLO WORLD"
```

#### `huruf_kecil(string)` / `lower(string)`
Mengubah semua huruf menjadi kecil.

```python
teks itu "HELLO WORLD"
kecil itu huruf_kecil(teks)  // "hello world"
```

#### `huruf_kapital(string)` / `capitalize(string)`
Huruf pertama kapital, sisanya kecil.

```python
teks itu "hello world"
kapital itu huruf_kapital(teks)  // "Hello world"
```

#### `huruf_judul(string)` / `title(string)`
Setiap kata diawali huruf kapital.

```python
teks itu "hello world"
judul itu huruf_judul(teks)  // "Hello World"
```

### String Transformation

#### `potong(string, start, end)` / `slice(string, start, end)`
Memotong string dari index start sampai end.

```python
teks itu "Hello World"
bagian itu potong(teks, 0, 5)  // "Hello"
```

#### `ganti(string, old, new)` / `replace(string, old, new)`
Mengganti substring dengan string baru.

```python
teks itu "Hello World"
baru itu ganti(teks, "World", "Python")  // "Hello Python"
```

#### `pisah(string, separator)` / `split(string, separator)`
Memisahkan string menjadi list.

```python
teks itu "a,b,c,d"
list_hasil itu pisah(teks, ",")  // ["a", "b", "c", "d"]
```

#### `gabung(separator, list)` / `join(separator, list)`
Menggabungkan list menjadi string.

```python
items itu ["a", "b", "c"]
hasil itu gabung("-", items)  // "a-b-c"
```

#### `hapus_spasi(string)` / `strip(string)`
Menghapus spasi di awal dan akhir.

```python
teks itu "  hello  "
bersih itu hapus_spasi(teks)  // "hello"
```

### String Validation

#### `mulai_dengan(string, prefix)` / `startswith(string, prefix)`
Cek apakah string dimulai dengan prefix.

```python
teks itu "Hello World"
hasil itu mulai_dengan(teks, "Hello")  // benar
```

#### `akhiri_dengan(string, suffix)` / `endswith(string, suffix)`
Cek apakah string diakhiri dengan suffix.

```python
teks itu "Hello World"
hasil itu akhiri_dengan(teks, "World")  // benar
```

#### `adalah_angka(string)` / `isdigit(string)`
Cek apakah string hanya berisi angka.

```python
teks itu "12345"
hasil itu adalah_angka(teks)  // benar
```

#### `adalah_huruf(string)` / `isalpha(string)`
Cek apakah string hanya berisi huruf.

```python
teks itu "Hello"
hasil itu adalah_huruf(teks)  // benar
```

---

## 🔢 Math & Statistics

### Basic Math

#### `abs(number)` / `absolut(number)`
Nilai absolut (tanpa tanda).

```python
nilai itu absolut(-5)  // 5
```

#### `round(number, digits)` / `bulat(number, digits)`
Membulatkan angka.

```python
nilai itu bulat(3.14159, 2)  // 3.14
```

#### `pow(base, exp)` / `pangkat(base, exp)`
Menghitung pangkat.

```python
nilai itu pangkat(2, 3)  // 8
```

#### `sqrt(number)` / `akar(number)`
Akar kuadrat.

```python
nilai itu akar(16)  // 4.0
```

### Statistics

#### `mean(list)` / `rata_rata(list)`
Menghitung rata-rata.

```python
data itu [1, 2, 3, 4, 5]
rata itu rata_rata(data)  // 3.0
```

#### `median(list)` / `nilai_tengah(list)`
Menghitung median.

```python
data itu [1, 2, 3, 4, 5]
tengah itu nilai_tengah(data)  // 3
```

#### `stdev(list)` / `deviasi_standar(list)`
Standar deviasi.

```python
data itu [1, 2, 3, 4, 5]
dev itu deviasi_standar(data)  // ~1.41
```

### Random Numbers

#### `random()` / `acak()`
Angka acak 0-1.

```python
nilai itu acak()  // 0.xxx
```

#### `randint(min, max)` / `acak_bulat(min, max)`
Integer acak dalam range.

```python
nilai itu acak_bulat(1, 10)  // 1-10
```

#### `choice(list)` / `pilih_acak(list)`
Pilih elemen acak dari list.

```python
items itu ["a", "b", "c"]
pilihan itu pilih_acak(items)
```

---

## 📊 List & Dict Operations

### List Operations

#### `tambah(list, item)` / `append(list, item)`
Tambah item ke list.

```python
data itu [1, 2, 3]
tambah(data, 4)  // [1, 2, 3, 4]
```

#### `hapus(list, item)` / `remove(list, item)`
Hapus item dari list.

```python
data itu [1, 2, 3, 4]
hapus(data, 3)  // [1, 2, 4]
```

#### `urutkan(list)` / `sort(list)`
Urutkan list.

```python
data itu [3, 1, 4, 2]
urutkan(data)  // [1, 2, 3, 4]
```

#### `balik(list)` / `reverse(list)`
Balik urutan list.

```python
data itu [1, 2, 3, 4]
balik(data)  // [4, 3, 2, 1]
```

#### `jumlah(list)` / `sum(list)`
Jumlahkan semua elemen.

```python
data itu [1, 2, 3, 4]
total itu jumlah(data)  // 10
```

#### `min(list)` / `nilai_minimum(list)`
Nilai minimum.

```python
data itu [3, 1, 4, 2]
minimum itu min(data)  // 1
```

#### `max(list)` / `nilai_maksimum(list)`
Nilai maksimum.

```python
data itu [3, 1, 4, 2]
maksimum itu max(data)  // 4
```

### Dict Operations

#### `kunci(dict)` / `keys(dict)`
Semua kunci dictionary.

```python
data itu {"a": 1, "b": 2}
keys itu kunci(data)  // ["a", "b"]
```

#### `nilai(dict)` / `values(dict)`
Semua nilai dictionary.

```python
data itu {"a": 1, "b": 2}
vals itu nilai(data)  // [1, 2]
```

#### `items(dict)` / `pasangan(dict)`
Pasangan key-value.

```python
data itu {"a": 1, "b": 2}
pairs itu items(data)  // [("a", 1), ("b", 2)]
```

---

## 📁 File Operations

### File Reading

#### `baca_file(path)` / `read_file(path)`
Baca seluruh file.

```python
content itu baca_file("data.txt")
```

#### `baca_baris(path)` / `read_lines(path)`
Baca file per baris.

```python
lines itu baca_baris("data.txt")
```

### File Writing

#### `tulis_file(path, content)` / `write_file(path, content)`
Tulis ke file (overwrite).

```python
tulis_file("data.txt", "Hello World")
```

#### `tambah_file(path, content)` / `append_file(path, content)`
Tambah ke file.

```python
tambah_file("data.txt", "\nBaris baru")
```

### File Management

#### `ada_file(path)` / `file_exists(path)`
Cek apakah file ada.

```python
exists itu ada_file("data.txt")
```

#### `hapus_file(path)` / `delete_file(path)`
Hapus file.

```python
hapus_file("data.txt")
```

#### `salin_file(src, dst)` / `copy_file(src, dst)`
Salin file.

```python
salin_file("data.txt", "backup.txt")
```

---

## 🔄 JSON Utilities

#### `json_parse(string)` / `parse_json(string)`
Parse JSON string.

```python
json_str itu '{"nama": "Budi", "umur": 25}'
data itu json_parse(json_str)
tampilkan data["nama"]  // "Budi"
```

#### `json_stringify(object)` / `to_json(object)`
Convert object ke JSON.

```python
data itu {"nama": "Budi", "umur": 25}
json_str itu json_stringify(data)
```

#### `json_baca(path)` / `read_json(path)`
Baca file JSON.

```python
data itu json_baca("data.json")
```

#### `json_tulis(path, data)` / `write_json(path, data)`
Tulis ke file JSON.

```python
data itu {"nama": "Budi"}
json_tulis("data.json", data)
```

---

## 🌐 HTTP Functions

### HTTP Requests

#### `http_get(url, params, headers, timeout)`
HTTP GET request.

```python
response itu http_get("https://api.example.com/users")
tampilkan response.status_code  // 200

// Dengan parameters
params itu {"page": 1, "limit": 10}
response itu http_get("https://api.example.com/users", params=params)

// Dengan headers
headers itu {"Authorization": "Bearer token123"}
response itu http_get("https://api.example.com/data", headers=headers)
```

#### `http_post(url, data, json, headers, timeout)`
HTTP POST request.

```python
// POST dengan JSON
data itu {"nama": "Budi", "email": "budi@example.com"}
response itu http_post("https://api.example.com/users", json=data)

// POST dengan form data
form_data itu {"username": "budi", "password": "secret"}
response itu http_post("https://api.example.com/login", data=form_data)
```

#### `http_put(url, data, json, headers, timeout)`
HTTP PUT request.

```python
data itu {"nama": "Budi Updated"}
response itu http_put("https://api.example.com/users/1", json=data)
```

#### `http_delete(url, headers, timeout)`
HTTP DELETE request.

```python
response itu http_delete("https://api.example.com/users/1")
```

### Response Object

```python
response itu http_get("https://api.example.com/data")

// Properties
tampilkan response.status_code  // 200
tampilkan response.url          // URL
tampilkan response.text         // Response body
tampilkan response.headers      // Headers dict

// Methods
data itu response.json()        // Parse JSON
is_ok itu response.ok()         // Check if 200-299
```

### Indonesian Aliases

```python
// Alias Bahasa Indonesia
response itu ambil_http("https://api.example.com/data")
response itu kirim_http("https://api.example.com/users", json=data)
response itu perbarui_http("https://api.example.com/users/1", json=data)
response itu hapus_http("https://api.example.com/users/1")
```

---

## ⚙️ System Functions

#### `waktu_sekarang()` / `current_time()`
Waktu sekarang.

```python
waktu itu waktu_sekarang()
```

#### `tanggal_sekarang()` / `current_date()`
Tanggal sekarang.

```python
tanggal itu tanggal_sekarang()
```

#### `sleep(seconds)` / `tidur(seconds)`
Delay eksekusi.

```python
tidur(2)  // Tidur 2 detik
```

#### `exit(code)` / `keluar(code)`
Keluar dari program.

```python
keluar(0)
```

---

## 🔄 Type Conversion

#### `ke_teks(value)` / `to_string(value)` / `str(value)`
Convert ke string.

```python
angka itu 123
teks itu ke_teks(angka)  // "123"
```

#### `ke_angka(value)` / `to_number(value)` / `float(value)`
Convert ke float.

```python
teks itu "3.14"
angka itu ke_angka(teks)  // 3.14
```

#### `ke_bulat(value)` / `to_integer(value)` / `int(value)`
Convert ke integer.

```python
teks itu "42"
bulat itu ke_bulat(teks)  // 42
```

#### `ke_boolean(value)` / `to_bool(value)` / `bool(value)`
Convert ke boolean.

```python
nilai itu ke_boolean(1)  // benar
```

---

## 🔁 Iteration Functions

#### `map(function, list)` / `petakan(function, list)`
Terapkan fungsi ke setiap elemen.

```python
angka itu [1, 2, 3, 4]
kuadrat itu map(lambda dengan x -> x * x, angka)
// [1, 4, 9, 16]
```

#### `filter(function, list)` / `saring(function, list)`
Saring elemen berdasarkan kondisi.

```python
angka itu [1, 2, 3, 4, 5]
genap itu filter(lambda dengan x -> x % 2 == 0, angka)
// [2, 4]
```

#### `zip(list1, list2)` / `gabung_list(list1, list2)`
Gabungkan dua list.

```python
nama itu ["a", "b", "c"]
nilai itu [1, 2, 3]
pairs itu zip(nama, nilai)
// [("a", 1), ("b", 2), ("c", 3)]
```

#### `enumerate(list)` / `enumerasi(list)`
Tambah index ke list.

```python
items itu ["a", "b", "c"]
indexed itu enumerate(items)
// [(0, "a"), (1, "b"), (2, "c")]
```

---

## 💡 Contoh Penggunaan

### String Processing

```python
teks itu "  Hello World  "

// Process
bersih itu hapus_spasi(teks)
besar itu huruf_besar(bersih)
kata itu pisah(besar, " ")

tampilkan kata  // ["HELLO", "WORLD"]
```

### Math Operations

```python
angka itu [1, 2, 3, 4, 5]

// Statistics
rata itu rata_rata(angka)
tengah itu nilai_tengah(angka)
dev itu deviasi_standar(angka)

tampilkan f"Rata-rata: {rata}"
tampilkan f"Median: {tengah}"
tampilkan f"Std Dev: {dev}"
```

### HTTP Request

```python
// GET request
response itu http_get("https://jsonplaceholder.typicode.com/posts/1")

jika response.ok()
    data itu response.json()
    tampilkan f"Title: {data['title']}"
    tampilkan f"Body: {data['body']}"
kalau_tidak
    tampilkan f"Error: {response.status_code}"
selesai
```

### File Processing

```python
// Read file
content itu baca_file("data.txt")

// Process
lines itu pisah(content, "\n")
filtered itu filter(lambda dengan x -> panjang(x) > 0, lines)

// Write result
hasil itu gabung("\n", filtered)
tulis_file("output.txt", hasil)
```

---

## 📚 Referensi Lengkap

Untuk daftar lengkap semua 184+ fungsi, lihat:
- [Built-in Functions Documentation](https://github.com/RenzMc/RenzmcLang/blob/main/docs/builtin-functions.md)
- [Quick Reference](https://github.com/RenzMc/RenzmcLang/blob/main/docs/quick-reference.md)

---

**Lanjut ke [Fitur Lanjutan](fitur-lanjutan) untuk OOP, Async, dan fitur advanced! 🚀**