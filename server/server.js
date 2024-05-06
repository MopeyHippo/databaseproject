import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // lets configure the .env so we can use the bits from it

const app = express();

app.use(cors());
app.use(express.json());

const connectionString = process.env.DATABASE_URL;

const db = new pg.Pool({ connectionString: connectionString });

app.get("/", (request, response) => {
  response.json("You are looking at my root route. How roude.");
});

app.get("/posts", async (request, response) => {
  const result = await db.query(`
  SELECT posts_id, posts_title, posts_content, posts_name, platforms.name AS platforms, tags.genre AS tags
  FROM posts
  JOIN platforms ON platforms.id = posts_category_id
  JOIN tags ON tags.id = posts_tag `);

  response.json(result.rows);
});

app.post("/posts", async (request, response) => {
  const title = request.body.title;
  const content = request.body.content;
  const platform = request.body.platform_name;
  const tags = request.body.tags;
  const username = request.body.username;
  console.log(request.body);

  db.query(
    `INSERT INTO posts (posts_title, posts_content, posts_name, posts_category_id, posts_tag) VALUES ($1, $2, $3, $4, $5)`,

    [title, content, username, platform, tags]
  );
  response.json({ success: true });
});


app.delete("/posts/:id", async (request, response) => {
  const postId = request.params.id;

  await db.query(`DELETE FROM posts WHERE posts_id = $1`, [postId]);

  response.json({ success: true });
});

app.listen(8080, () => console.log("I am running on 8080"));
