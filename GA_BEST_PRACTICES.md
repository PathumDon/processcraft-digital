# Google Analytics Best Practices in Next.js

While we committed the `.env.local` file to get you started quickly, the **Ideal Enterprise Setup** is slightly different.

## 1. The Principle: "Secrets in Dashboard, Not Code"
Ideally, you should **never commit** `.env` files to GitHub.
-   **Security**: Keeps keys private (essential for API secrets).
-   **Flexibility**: Allows different keys for Staging vs. Production.

## 2. The Ideal Workflow
1.  **Local**: Keep a `.env.local` file on your machine but **Git Ignore** it.
2.  **Production**: Set the Environment Variable in your hosting dashboard (Vercel/Netlify).
    -   Key: `NEXT_PUBLIC_GA_ID`
    -   Value: `G-XXXXXXXXXX`

## 3. How to Switch to "Ideal" Mode
If you prefer this method, we can:
1.  Run `git rm --cached .env.local` to remove it from GitHub.
2.  Update `.gitignore` to ensure it stays ignored.
3.  You would then verify your deployment settings to ensure `NEXT_PUBLIC_GA_ID` is set there.

For now, your setup is **safe** (GA IDs are public) and **functional**.
