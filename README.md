# Nuclear Physics Lab, KIIT University

This project is for the Nuclear Physics Lab, led by Prof. B.B Sahu at KIIT University.

## Getting Started

Clone this repo and run it locally to develop and maintain the website for the lab.

## Features
- Research group management
- Publications listing
- Contact and outreach info
- Modern UI/UX

## Development

1. Clone the repo
2. Install dependencies
3. Run the dev server

```sh
npm install
npm run dev
```

## Deployment

Push changes to your preferred hosting platform.

---

For any questions, contact Prof. B.B Sahu at bbsahufpy@kiit.ac.in

---

## **How to Run and Update the Backend (Admin Panel)**

1. **Install dependencies (if not already):**
   ```sh
   npm install
   ```

2. **Start the backend admin panel:**
   ```sh
   npm run admin-panel
   ```
   - This will start the admin panel at [http://localhost:3001](http://localhost:3001).
   - Open this URL in your browser.

3. **Update students or publications:**
   - Use the web form in the admin panel to add/edit/delete students and publications.
   - The data is saved to `public/students.json` and `public/publications.json`.

4. **Commit and push the updated JSON files:**
   ```sh
   git add public/students.json public/publications.json
   git commit -m "Update research group and publications data"
   git push
   ```

---

## **How to Run the Frontend (React/Vite App)**

1. **Install dependencies (if not already):**
   ```sh
   npm install
   ```

2. **Start the frontend dev server:**
   ```sh
   npm run dev
   ```
   - The site will be available at [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal).

---

## **README Section Example**

```markdown
<code_block_to_apply_changes_from>
```


## Notes

- The backend admin panel is for local use only. For production, update the JSON files locally and push to GitHub.
- The frontend fetches data from the JSON files in the `public` directory.
