# SoftwareCrafters Academy - Design

A minimal TypeScript setup for practicing **code katas**, with **Jest** for testing and **ESLint + Prettier** for code quality.

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/softwarecrafters-academy-design.git
cd softwarecrafters-academy-design
```

### 2. Install dependencies
```bash
npm install
```

## 📂 Project Structure
```
softwarecrafters-academy-design/
├── katas/
│   ├── fizzbuzz/
│   │   ├── fizzbuzz.ts
│   │   └── fizzbuzz.spec.ts
├── .eslintrc.json
├── .prettierrc
├── jest.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 🧪 Adding a New Kata

1. Create a new folder under `katas/`:
   ```
   katas/bowling/
   ```

2. Inside it, add:
   ```
   katas/bowling/bowling.ts
   katas/bowling/bowling.spec.ts
   ```

3. Run the tests:
   ```bash
   npm run test:watch
   ```

## 📜 License

This project is licensed under the [MIT License](LICENSE).