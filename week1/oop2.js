"use strict";
class Movie {
    constructor(title, director) {
        // add your code here
        this.title = title;
        this.director = director;
        this.stars = [];
        this.writers = [];
        this.ratings = [];
    }

    getTitle() {
        // add your code here
        return this.title;
    }

    getDirector() {
        // add your code here
        return this.director;
    }

    addStar(star) {
        // add your code here
        this.stars.push(star);
    }

    getStars() {
        // add your code here
        return this.stars;
    }

    addWriter(writer) {
        // add your code here
        this.writers.push(writer);
    }

    getWriters() {
        // add your code here
        return this.writers;
    }

    addRating(rating) {
        // add your code here
        this.ratings.push(rating);
    }

    getAverageRating() {
        // add your code here
        let sum = 0;
        for (i of this.ratings) {
            sum += i;
        }
        return sum / this.ratings.length;
    }

    // ... Add yours :slightly_smiling_face: Look to IMDB for inspiration
}

class StaffMember {
    constructor(name, role, dateOfBirth) {
        // add your code here
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
        this.movies = [];
    }

    addMovie(movie) {
        // add your code here
        this.movies.push(movie);
    }

    getName() {
        // add your code here
        return this.name;
    }

    getRole() {
        // add your code here
        return this.role;
    }

    getAge() {
        // add your code here
        return 2018 - this.dateOfBirth;
    }
}


const myMovie = new Movie('Wall-E', 'Andrew Stanton');

const firstActor = new StaffMember('Ben Burtt', 'Wall-E Robot', 1948);
const secondActor = new StaffMember('Elissa Knight', 'EVE Robot', 1975);

myMovie.addStar(firstActor);
myMovie.addStar(secondActor);
// create and add more staff members

// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getRole()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director}`);