# 📚 Contoh Program RenzmcLang

Koleksi contoh program lengkap untuk berbagai use case.

## 📋 Kategori

1. [Program Dasar](#-program-dasar)
2. [Algoritma](#-algoritma)
3. [Web Development](#-web-development)
4. [Data Processing](#-data-processing)
5. [Database](#-database)
6. [Automation](#-automation)

---

## 🎯 Program Dasar

### 1. Kalkulator Lengkap

```python
tampilkan "=== KALKULATOR LENGKAP ==="
tampilkan ""

fungsi tambah(a, b):
    hasil a + b
selesai

fungsi kurang(a, b):
    hasil a - b
selesai

fungsi kali(a, b):
    hasil a * b
selesai

fungsi bagi(a, b):
    jika b == 0
        hasil "Error: Tidak bisa dibagi nol"
    selesai
    hasil a / b
selesai

fungsi pangkat(a, b):
    hasil a ** b
selesai

// Menu
tampilkan "Pilih operasi:"
tampilkan "1. Penjumlahan"
tampilkan "2. Pengurangan"
tampilkan "3. Perkalian"
tampilkan "4. Pembagian"
tampilkan "5. Pangkat"
tampilkan ""

pilihan itu 1  // Contoh pilihan
angka1 itu 10
angka2 itu 5

cocok pilihan
    kasus 1:
        hasil itu tambah(angka1, angka2)
        tampilkan f"{angka1} + {angka2} = {hasil}"
    kasus 2:
        hasil itu kurang(angka1, angka2)
        tampilkan f"{angka1} - {angka2} = {hasil}"
    kasus 3:
        hasil itu kali(angka1, angka2)
        tampilkan f"{angka1} × {angka2} = {hasil}"
    kasus 4:
        hasil itu bagi(angka1, angka2)
        tampilkan f"{angka1} ÷ {angka2} = {hasil}"
    kasus 5:
        hasil itu pangkat(angka1, angka2)
        tampilkan f"{angka1} ^ {angka2} = {hasil}"
    bawaan:
        tampilkan "Pilihan tidak valid"
selesai
```

### 2. Sistem Login Sederhana

```python
// Database user (simulasi)
users itu {
    "admin": "admin123",
    "budi": "budi123",
    "ani": "ani123"
}

fungsi login(username, password):
    jika username dalam users
        jika users[username] == password
            hasil benar
        selesai
    selesai
    hasil salah
selesai

fungsi register(username, password):
    jika username dalam users
        hasil salah
    selesai
    users[username] itu password
    hasil benar
selesai

// Contoh penggunaan
tampilkan "=== SISTEM LOGIN ==="
tampilkan ""

// Login
username itu "budi"
password itu "budi123"

jika login(username, password)
    tampilkan f"✓ Login berhasil! Selamat datang, {username}"
kalau_tidak
    tampilkan "✗ Login gagal! Username atau password salah"
selesai

// Register
new_user itu "citra"
new_pass itu "citra123"

jika register(new_user, new_pass)
    tampilkan f"✓ Registrasi berhasil untuk {new_user}"
kalau_tidak
    tampilkan f"✗ Username {new_user} sudah terdaftar"
selesai
```

### 3. To-Do List Manager

```python
kelas TodoList:
    konstruktor():
        diri.tasks itu []
        diri.next_id itu 1
    selesai
    
    metode tambah(task):
        item itu {
            "id": diri.next_id,
            "task": task,
            "done": salah
        }
        tambah(diri.tasks, item)
        diri.next_id += 1
        tampilkan f"✓ Task ditambahkan: {task}"
    selesai
    
    metode selesai(task_id):
        untuk setiap task dari diri.tasks
            jika task["id"] == task_id
                task["done"] itu benar
                tampilkan f"✓ Task selesai: {task['task']}"
                hasil benar
            selesai
        selesai
        tampilkan "✗ Task tidak ditemukan"
        hasil salah
    selesai
    
    metode hapus(task_id):
        untuk setiap i, task dari enumerate(diri.tasks)
            jika task["id"] == task_id
                hapus(diri.tasks, task)
                tampilkan f"✓ Task dihapus: {task['task']}"
                hasil benar
            selesai
        selesai
        tampilkan "✗ Task tidak ditemukan"
        hasil salah
    selesai
    
    metode tampilkan_semua():
        jika panjang(diri.tasks) == 0
            tampilkan "Tidak ada task"
            hasil
        selesai
        
        tampilkan "\n=== DAFTAR TASK ==="
        untuk setiap task dari diri.tasks
            status itu "✓" jika task["done"] kalau tidak "○"
            tampilkan f"{status} [{task['id']}] {task['task']}"
        selesai
    selesai
selesai

// Usage
todo itu TodoList()
todo.tambah("Belajar RenzmcLang")
todo.tambah("Buat project")
todo.tambah("Deploy aplikasi")
todo.tampilkan_semua()

todo.selesai(1)
todo.tampilkan_semua()
```

---

## 🔍 Algoritma

### 1. Binary Search

```python
fungsi binary_search(arr, target):
    left itu 0
    right itu panjang(arr) - 1
    
    selama left <= right
        mid itu (left + right) // 2
        
        jika arr[mid] == target
            hasil mid
        kalau_tidak_jika arr[mid] < target
            left itu mid + 1
        kalau_tidak
            right itu mid - 1
        selesai
    selesai
    
    hasil -1
selesai

// Test
data itu [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
target itu 13

tampilkan f"Data: {data}"
tampilkan f"Mencari: {target}"

index itu binary_search(data, target)

jika index != -1
    tampilkan f"✓ Ditemukan di index {index}"
kalau_tidak
    tampilkan "✗ Tidak ditemukan"
selesai
```

### 2. Sorting Algorithms

```python
// Bubble Sort
fungsi bubble_sort(arr):
    n itu panjang(arr)
    untuk i dari 0 sampai n - 1
        untuk j dari 0 sampai n - i - 2
            jika arr[j] > arr[j + 1]
                // Swap
                temp itu arr[j]
                arr[j] itu arr[j + 1]
                arr[j + 1] itu temp
            selesai
        selesai
    selesai
    hasil arr
selesai

// Quick Sort
fungsi quick_sort(arr):
    jika panjang(arr) <= 1
        hasil arr
    selesai
    
    pivot itu arr[panjang(arr) // 2]
    left itu [x untuk setiap x dari arr jika x < pivot]
    middle itu [x untuk setiap x dari arr jika x == pivot]
    right itu [x untuk setiap x dari arr jika x > pivot]
    
    hasil quick_sort(left) + middle + quick_sort(right)
selesai

// Test
data itu [64, 34, 25, 12, 22, 11, 90]
tampilkan f"Data asli: {data}"

sorted_bubble itu bubble_sort(data[:])
tampilkan f"Bubble Sort: {sorted_bubble}"

sorted_quick itu quick_sort(data[:])
tampilkan f"Quick Sort: {sorted_quick}"
```

---

## 🌐 Web Development

### 1. HTTP API Client

```python
async fungsi get_users():
    response itu await http_get("https://jsonplaceholder.typicode.com/users")
    
    jika response.ok()
        users itu response.json()
        tampilkan f"Total users: {panjang(users)}"
        
        untuk setiap user dari users[:5]  // 5 pertama
            tampilkan f"- {user['name']} ({user['email']})"
        selesai
    kalau_tidak
        tampilkan f"Error: {response.status_code}"
    selesai
selesai

async fungsi create_post(title, body):
    data itu {
        "title": title,
        "body": body,
        "userId": 1
    }
    
    response itu await http_post(
        "https://jsonplaceholder.typicode.com/posts",
        json=data
    )
    
    jika response.ok()
        result itu response.json()
        tampilkan f"✓ Post created with ID: {result['id']}"
    kalau_tidak
        tampilkan f"✗ Error: {response.status_code}"
    selesai
selesai

// Run
await get_users()
await create_post("Hello RenzmcLang", "This is a test post")
```

### 2. Web Scraper

```python
impor_python "requests"
impor_python "bs4.BeautifulSoup"

fungsi scrape_github_profile(username):
    url itu f"https://github.com/{username}"
    
    coba
        response itu panggil_python requests.get(url)
        
        jika response.status_code == 200
            soup itu panggil_python BeautifulSoup(response.text, "html.parser")
            
            // Extract profile info
            name_elem itu soup.find("span", {"class": "p-name"})
            bio_elem itu soup.find("div", {"class": "p-note"})
            
            tampilkan f"=== GitHub Profile: {username} ==="
            
            jika name_elem
                tampilkan f"Name: {name_elem.text.strip()}"
            selesai
            
            jika bio_elem
                tampilkan f"Bio: {bio_elem.text.strip()}"
            selesai
        kalau_tidak
            tampilkan f"Error: Status {response.status_code}"
        selesai
    tangkap Exception sebagai e
        tampilkan f"Error: {e}"
    selesai
selesai

scrape_github_profile("renzmc")
```

---

## 📊 Data Processing

### 1. CSV Data Analysis

```python
impor_python "csv"

fungsi analyze_csv(filename):
    coba
        // Read CSV
        dengan buka(filename, "r") sebagai f
            reader itu panggil_python csv.DictReader(f)
            data itu list(reader)
        selesai
        
        tampilkan f"=== Analisis Data: {filename} ==="
        tampilkan f"Total records: {panjang(data)}"
        
        // Analyze numeric columns
        jika panjang(data) > 0
            columns itu kunci(data[0])
            tampilkan f"Columns: {gabung(', ', columns)}"
        selesai
        
        hasil data
    tangkap Exception sebagai e
        tampilkan f"Error: {e}"
        hasil []
    selesai
selesai

// Create sample CSV
sample_data itu [
    ["Nama", "Umur", "Nilai"],
    ["Budi", "25", "85"],
    ["Ani", "23", "90"],
    ["Citra", "24", "88"]
]

tulis_file("data.csv", gabung("\n", [gabung(",", row) untuk setiap row dari sample_data]))

// Analyze
data itu analyze_csv("data.csv")
```

### 2. JSON Data Processing

```python
// Sample data
data itu {
    "students": [
        {"name": "Budi", "scores": [85, 90, 88]},
        {"name": "Ani", "scores": [92, 88, 95]},
        {"name": "Citra", "scores": [78, 85, 82]}
    ]
}

// Calculate averages
fungsi calculate_averages(data):
    results itu []
    
    untuk setiap student dari data["students"]
        avg itu rata_rata(student["scores"])
        tambah(results, {
            "name": student["name"],
            "average": avg,
            "grade": "A" jika avg >= 90 kalau tidak "B" jika avg >= 80 kalau tidak "C"
        })
    selesai
    
    hasil results
selesai

// Process
results itu calculate_averages(data)

tampilkan "=== HASIL ANALISIS ==="
untuk setiap result dari results
    tampilkan f"{result['name']}: {result['average']:.2f} (Grade: {result['grade']})"
selesai

// Save to JSON
json_tulis("results.json", results)
tampilkan "\n✓ Results saved to results.json"
```

---

## 🗄️ Database

### 1. SQLite CRUD Operations

```python
impor_python "sqlite3"

kelas Database:
    konstruktor(db_name):
        diri.conn itu panggil_python sqlite3.connect(db_name)
        diri.cursor itu diri.conn.cursor()
        diri.create_table()
    selesai
    
    metode create_table():
        query itu """
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            age INTEGER
        )
        """
        diri.cursor.execute(query)
        diri.conn.commit()
    selesai
    
    metode insert(name, email, age):
        query itu "INSERT INTO users (name, email, age) VALUES (?, ?, ?)"
        coba
            diri.cursor.execute(query, (name, email, age))
            diri.conn.commit()
            tampilkan f"✓ User {name} ditambahkan"
            hasil benar
        tangkap Exception sebagai e
            tampilkan f"✗ Error: {e}"
            hasil salah
        selesai
    selesai
    
    metode get_all():
        query itu "SELECT * FROM users"
        diri.cursor.execute(query)
        hasil diri.cursor.fetchall()
    selesai
    
    metode close():
        diri.conn.close()
    selesai
selesai

// Usage
db itu Database("users.db")

// Insert data
db.insert("Budi", "budi@example.com", 25)
db.insert("Ani", "ani@example.com", 23)
db.insert("Citra", "citra@example.com", 24)

// Get all users
users itu db.get_all()
tampilkan "\n=== DAFTAR USER ==="
untuk setiap user dari users
    tampilkan f"ID: {user[0]}, Name: {user[1]}, Email: {user[2]}, Age: {user[3]}"
selesai

db.close()
```

---

## 🤖 Automation

### 1. File Organizer

```python
impor_python "os"
impor_python "shutil"

fungsi organize_files(directory):
    // File type categories
    categories itu {
        "Images": [".jpg", ".jpeg", ".png", ".gif"],
        "Documents": [".pdf", ".doc", ".docx", ".txt"],
        "Videos": [".mp4", ".avi", ".mkv"],
        "Audio": [".mp3", ".wav", ".flac"]
    }
    
    // Create category folders
    untuk setiap category dari kunci(categories)
        folder itu directory + "/" + category
        jika tidak ada_file(folder)
            buat_direktori(folder)
        selesai
    selesai
    
    // Organize files
    files itu daftar_file(directory)
    
    untuk setiap file dari files
        jika ada_file(directory + "/" + file)
            ext itu file[file.rfind("."):]
            
            untuk setiap category, extensions dari items(categories)
                jika ext dalam extensions
                    src itu directory + "/" + file
                    dst itu directory + "/" + category + "/" + file
                    salin_file(src, dst)
                    tampilkan f"✓ Moved {file} to {category}"
                    berhenti
                selesai
            selesai
        selesai
    selesai
selesai

// Usage
organize_files("./downloads")
```

### 2. Backup Script

```python
impor_python "datetime"
impor_python "shutil"

fungsi create_backup(source_dir, backup_dir):
    // Create timestamp
    timestamp itu panggil_python datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_name itu f"backup_{timestamp}"
    backup_path itu backup_dir + "/" + backup_name
    
    coba
        // Create backup directory
        jika tidak ada_file(backup_dir)
            buat_direktori(backup_dir)
        selesai
        
        // Copy files
        tampilkan f"Creating backup: {backup_name}"
        panggil_python shutil.copytree(source_dir, backup_path)
        tampilkan f"✓ Backup created successfully at {backup_path}"
        
        hasil benar
    tangkap Exception sebagai e
        tampilkan f"✗ Backup failed: {e}"
        hasil salah
    selesai
selesai

// Usage
create_backup("./project", "./backups")
```

---

## 💡 Tips Penggunaan

1. **Modifikasi Contoh** - Sesuaikan dengan kebutuhan Anda
2. **Kombinasi Fitur** - Gabungkan berbagai contoh untuk project yang lebih kompleks
3. **Error Handling** - Selalu tambahkan try-catch untuk production code
4. **Testing** - Test setiap fungsi sebelum digunakan
5. **Documentation** - Tambahkan komentar untuk kode yang kompleks

---

## 📚 Sumber Daya Tambahan

- **GitHub Examples**: [github.com/RenzMc/RenzmcLang/tree/main/examples](https://github.com/RenzMc/RenzmcLang/tree/main/examples)
- **99+ Contoh Program**: Lihat folder examples di repository
- **Community Projects**: Cari inspirasi dari project komunitas

---

**Selamat coding! 🚀**