# 🚀 Fitur Lanjutan RenzmcLang

Panduan lengkap fitur-fitur advanced RenzmcLang untuk development profesional.

## 📋 Daftar Isi

1. [Object-Oriented Programming (OOP)](#-object-oriented-programming-oop)
2. [Async/Await](#-asyncawait)
3. [Error Handling](#-error-handling)
4. [Integrasi Python](#-integrasi-python)
5. [JIT Compiler](#-jit-compiler)
6. [Type System](#-type-system)

---

## 🎯 Object-Oriented Programming (OOP)

### Class dan Object

```python
// Definisi class
kelas Mahasiswa:
    konstruktor(nama, nim, jurusan):
        diri.nama itu nama
        diri.nim itu nim
        diri.jurusan itu jurusan
        diri.nilai itu []
    selesai
    
    metode tambah_nilai(nilai):
        tambah(diri.nilai, nilai)
    selesai
    
    metode rata_rata():
        jika panjang(diri.nilai) == 0
            hasil 0
        selesai
        hasil jumlah(diri.nilai) / panjang(diri.nilai)
    selesai
    
    metode info():
        tampilkan f"Nama: {diri.nama}"
        tampilkan f"NIM: {diri.nim}"
        tampilkan f"Jurusan: {diri.jurusan}"
        tampilkan f"Rata-rata: {diri.rata_rata()}"
    selesai
selesai

// Buat instance
mhs itu Mahasiswa("Budi", "12345", "Informatika")
mhs.tambah_nilai(85)
mhs.tambah_nilai(90)
mhs.tambah_nilai(88)
mhs.info()
```

### Inheritance (Pewarisan)

```python
// Base class
kelas Orang:
    konstruktor(nama, umur):
        diri.nama itu nama
        diri.umur itu umur
    selesai
    
    metode perkenalan():
        tampilkan f"Nama: {diri.nama}, Umur: {diri.umur}"
    selesai
selesai

// Derived class
kelas Mahasiswa warisi Orang:
    konstruktor(nama, umur, nim):
        super().__init__(nama, umur)
        diri.nim itu nim
    selesai
    
    metode perkenalan():
        super().perkenalan()
        tampilkan f"NIM: {diri.nim}"
    selesai
selesai

// Usage
mhs itu Mahasiswa("Budi", 20, "12345")
mhs.perkenalan()
```

### Properties dan Encapsulation

```python
kelas BankAccount:
    konstruktor(nama, saldo_awal):
        diri.nama itu nama
        diri._saldo itu saldo_awal
    selesai
    
    @properti
    metode saldo():
        hasil diri._saldo
    selesai
    
    metode setor(jumlah):
        jika jumlah > 0
            diri._saldo += jumlah
            tampilkan f"Setor: Rp {jumlah}"
        selesai
    selesai
    
    metode tarik(jumlah):
        jika jumlah > 0 dan jumlah <= diri._saldo
            diri._saldo -= jumlah
            tampilkan f"Tarik: Rp {jumlah}"
        kalau_tidak
            tampilkan "Saldo tidak cukup"
        selesai
    selesai
selesai

// Usage
akun itu BankAccount("Budi", 1000000)
tampilkan f"Saldo: Rp {akun.saldo}"
akun.setor(500000)
akun.tarik(200000)
```

---

## ⚡ Async/Await

### Basic Async Function

```python
async fungsi fetch_data(url):
    tampilkan f"Fetching from {url}..."
    await tidur(2)  // Simulate delay
    hasil f"Data from {url}"
selesai

// Call async function
hasil itu await fetch_data("https://api.example.com")
tampilkan hasil
```

### Multiple Async Operations

```python
async fungsi process_user(user_id):
    tampilkan f"Processing user {user_id}..."
    await tidur(1)
    hasil f"User {user_id} processed"
selesai

async fungsi main():
    // Sequential
    hasil1 itu await process_user(1)
    hasil2 itu await process_user(2)
    
    tampilkan hasil1
    tampilkan hasil2
selesai

await main()
```

### Async dengan HTTP

```python
async fungsi fetch_users():
    response itu await http_get("https://jsonplaceholder.typicode.com/users")
    data itu response.json()
    
    untuk setiap user dari data
        tampilkan f"User: {user['name']}"
    selesai
selesai

await fetch_users()
```

---

## 🛡️ Error Handling

### Try-Catch-Finally

```python
coba
    // Code yang mungkin error
    nilai itu ke_angka(input("Masukkan angka: "))
    hasil itu 100 / nilai
    tampilkan f"Hasil: {hasil}"
tangkap ZeroDivisionError sebagai e
    tampilkan "Error: Tidak bisa dibagi nol"
tangkap ValueError sebagai e
    tampilkan "Error: Input bukan angka"
tangkap Exception sebagai e
    tampilkan f"Error: {e}"
akhirnya
    tampilkan "Selesai"
selesai
```

### Custom Exceptions

```python
kelas ValidationError warisi Exception:
    konstruktor(message):
        diri.message itu message
    selesai
selesai

fungsi validate_age(age):
    jika age < 0
        raise ValidationError("Umur tidak boleh negatif")
    selesai
    jika age > 150
        raise ValidationError("Umur tidak valid")
    selesai
    hasil benar
selesai

// Usage
coba
    validate_age(-5)
tangkap ValidationError sebagai e
    tampilkan f"Validation error: {e.message}"
selesai
```

---

## 🐍 Integrasi Python

### Import Library Python

```python
// Import library
impor_python "requests"
impor_python "json"
impor_python "pandas"
impor_python "numpy"

// Gunakan library
response itu panggil_python requests.get("https://api.github.com/users/renzmc")
data itu panggil_python json.loads(response.text)
tampilkan f"User: {data['name']}"
```

### Akses Python Builtins

```python
impor_python "math"
impor_python "datetime"
impor_python "random"

// Math operations
hasil itu panggil_python math.sqrt(16)
tampilkan f"Akar 16 = {hasil}"

// Datetime
sekarang itu panggil_python datetime.datetime.now()
tampilkan f"Waktu: {sekarang}"

// Random
angka itu panggil_python random.randint(1, 100)
tampilkan f"Angka acak: {angka}"
```

### Contoh Lengkap: Web Scraping

```python
impor_python "requests"
impor_python "bs4.BeautifulSoup"

fungsi scrape_website(url):
    coba
        // Fetch webpage
        response itu panggil_python requests.get(url)
        
        jika response.status_code == 200
            // Parse HTML
            soup itu panggil_python BeautifulSoup(response.text, "html.parser")
            
            // Extract data
            title itu soup.find("title")
            tampilkan f"Title: {title.text}"
            
            // Extract all links
            links itu soup.find_all("a")
            tampilkan f"Total links: {panjang(links)}"
        kalau_tidak
            tampilkan f"Error: Status {response.status_code}"
        selesai
    tangkap Exception sebagai e
        tampilkan f"Error: {e}"
    selesai
selesai

scrape_website("https://example.com")
```

---

## 🚀 JIT Compiler

RenzmcLang memiliki JIT (Just-In-Time) compiler yang otomatis mengoptimasi fungsi yang sering dipanggil.

### Automatic Optimization

```python
// Fungsi ini akan otomatis dikompilasi
fungsi fibonacci(n):
    jika n <= 1
        hasil n
    selesai
    hasil fibonacci(n-1) + fibonacci(n-2)
selesai

// Setelah dipanggil 10+ kali, fungsi akan dikompilasi
untuk i dari 1 sampai 20
    hasil itu fibonacci(i)
    tampilkan f"Fibonacci({i}) = {hasil}"
selesai
```

### Performance Tips

1. **Fungsi Numerik** - Operasi matematika mendapat boost terbesar
2. **Loop Intensif** - Loop dengan banyak iterasi akan dioptimasi
3. **Pure Functions** - Fungsi tanpa side effects lebih mudah dioptimasi
4. **Type Hints** - Membantu JIT compiler mengoptimasi lebih baik

```python
// Dengan type hints untuk optimasi maksimal
fungsi hitung_rata_rata(data: List[Integer]):
    total: Integer itu 0
    untuk setiap nilai dari data
        total += nilai
    selesai
    hasil total / panjang(data)
selesai
```

---

## 💎 Type System

### Basic Type Hints

```python
// Variable type hints
nama: String itu "Budi"
umur: Integer itu 25
tinggi: Float itu 175.5
is_student: Boolean itu benar

// Function type hints
fungsi tambah(a: Integer, b: Integer) -> Integer:
    hasil a + b
selesai

fungsi sapa(nama: String) -> String:
    hasil f"Hello, {nama}!"
selesai
```

### Union Types

```python
// Union types - bisa lebih dari satu tipe
nilai: Integer | String itu 42
nilai itu "empat puluh dua"  // OK

fungsi process(data: Integer | String):
    jika jenis(data) == "int"
        tampilkan f"Integer: {data}"
    kalau_tidak
        tampilkan f"String: {data}"
    selesai
selesai
```

### Optional Types

```python
// Optional types - bisa None
nama: String? itu "Budi"
nama itu kosong  // OK

fungsi cari_user(id: Integer) -> String?:
    // Bisa return String atau None
    jika id > 0
        hasil f"User {id}"
    selesai
    hasil kosong
selesai
```

### Generic Types

```python
// List dengan type hints
angka: List[Integer] itu [1, 2, 3, 4, 5]
nama: List[String] itu ["Budi", "Ani", "Citra"]

// Dictionary dengan type hints
data: Dict[String, Integer] itu {
    "Budi": 85,
    "Ani": 90,
    "Citra": 88
}

// Nested types
matrix: List[List[Integer]] itu [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```

---

## 🎨 Best Practices

### 1. OOP Best Practices

```python
// ✅ Good - Clear class structure
kelas User:
    konstruktor(username, email):
        diri.username itu username
        diri.email itu email
        diri._password itu kosong
    selesai
    
    metode set_password(password):
        // Hash password
        diri._password itu hash(password)
    selesai
    
    metode verify_password(password):
        hasil hash(password) == diri._password
    selesai
selesai

// ❌ Bad - Exposing internal state
kelas User:
    konstruktor(username, email, password):
        diri.username itu username
        diri.email itu email
        diri.password itu password  // Direct access
    selesai
selesai
```

### 2. Async Best Practices

```python
// ✅ Good - Proper async usage
async fungsi fetch_all_users():
    users itu await http_get("/api/users")
    hasil users.json()
selesai

// ❌ Bad - Missing await
async fungsi fetch_all_users():
    users itu http_get("/api/users")  // Missing await
    hasil users.json()
selesai
```

### 3. Error Handling Best Practices

```python
// ✅ Good - Specific error handling
coba
    data itu json_parse(content)
tangkap JSONDecodeError sebagai e
    tampilkan f"Invalid JSON: {e}"
tangkap FileNotFoundError sebagai e
    tampilkan f"File not found: {e}"
selesai

// ❌ Bad - Catching all errors
coba
    data itu json_parse(content)
tangkap Exception sebagai e
    tampilkan "Something went wrong"
selesai
```

---

## 📚 Contoh Project Lengkap

### REST API Client

```python
kelas APIClient:
    konstruktor(base_url):
        diri.base_url itu base_url
        diri.headers itu {"Content-Type": "application/json"}
    selesai
    
    async metode get(endpoint):
        url itu diri.base_url + endpoint
        response itu await http_get(url, headers=diri.headers)
        hasil response.json()
    selesai
    
    async metode post(endpoint, data):
        url itu diri.base_url + endpoint
        response itu await http_post(url, json=data, headers=diri.headers)
        hasil response.json()
    selesai
selesai

// Usage
async fungsi main():
    client itu APIClient("https://api.example.com")
    
    // Get users
    users itu await client.get("/users")
    tampilkan f"Total users: {panjang(users)}"
    
    // Create user
    new_user itu {
        "name": "Budi",
        "email": "budi@example.com"
    }
    result itu await client.post("/users", new_user)
    tampilkan f"Created: {result}"
selesai

await main()
```

---

**Lanjut ke [Contoh Program](contoh) untuk melihat implementasi lengkap! 🚀**