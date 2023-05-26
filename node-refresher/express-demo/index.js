const Joi = require("joi");
const express = require("express");

const app = express();

app.use(express.json());

const courses = [
    {
        id: 1,
        name: "course1",
    },
    {
        id: 2,
        name: "course2",
    },
    {
        id: 3,
        name: "course3",
    },
];

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(course);
}

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
    res.send(courses);
});

// to get a specific id, /api/courses/1
app.get("/api/courses/:id", (req, res) => {
    // res.send(req.params.id);
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
        return res
            .status(404)
            .send("The course with the given ID was not found.");
    res.send(course);
});

// to use multiple params
// http://localhost:3000/api/posts/2018/1
// {"year":"2018","month":"1"}
app.get("/api/posts/:year/:month", (req, res) => {
    res.send(req.params);
});

app.post("/api/courses/", (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1, // For simplicity. This does not ensure unique IDs.
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
        return res
            .status(404)
            .send("The course with the given ID was not found.");

    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
        return res
            .status(404)
            .send("The course with the given ID was not found.");

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(courses);
});

// to use query string parameters, use ?
// http://localhost:3000/api/posts/2018/1?sortBy=name
// {"sortBy":"name"}
// app.get("/api/posts/:year/:month", (req, res) => {
//     res.send(req.query);
// });

// PORT
// To set a port, run the following in your CL:
// export PORT=5000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`);
});
