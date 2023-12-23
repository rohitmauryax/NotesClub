import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to <span className="font-bold">NotesClub</span>, the ultimate
          destination for academic excellence, collaborative learning, and
          dynamic visual experiences through video playlists! Our mission is to
          empower students in their educational journey by providing a
          centralized hub for high-quality notes, resources, and a vibrant
          community of learners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At <span className="font-bold">NotesClub</span>, we are committed
              to fostering a culture of knowledge sharing and enhancing the
              learning experience for students across diverse academic
              disciplines. We believe that a combination of well-organized notes
              and engaging video content can make a significant impact on
              educational outcomes.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
            <ul className="list-disc text-gray-700">
              <li>
                <span className="font-bold">Comprehensive Repository:</span> We
                curate an extensive collection of notes covering a wide range of
                subjects.
              </li>
              <li>
                <span className="font-bold">Video Playlists:</span> Immerse
                yourself in curated video playlists featuring expert insights
                and tutorial series.
              </li>
              <li>
                <span className="font-bold">User-Friendly Platform:</span>{" "}
                Navigate seamlessly through subjects, topics, and resources.
              </li>
              <li>
                <span className="font-bold">Collaborative Community:</span>{" "}
                Connect with fellow students, share insights, and engage in
                collaborative learning.
              </li>
              <li>
                <span className="font-bold">Quality Assurance:</span> All notes
                and videos undergo a rigorous quality assurance process.
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold my-6">How It Works</h2>
        <ol className="list-decimal list-inside text-gray-700 mb-8">
          <li>
            <span className="font-bold">Browse Subjects:</span> Explore a wide
            array of subjects and find the one that aligns with your academic
            needs.
          </li>
          <li>
            <span className="font-bold">Download Notes:</span> Access and
            download high-quality notes contributed by your peers and educators.
          </li>
          <li>
            <span className="font-bold">Explore Video Playlists:</span> Immerse
            yourself in our curated video playlists, covering a variety of
            topics.
          </li>
          <li>
            <span className="font-bold">Engage with the Community:</span> Join
            discussions, ask questions, and share your knowledge within our
            vibrant community.
          </li>
        </ol>

        <p className="text-lg text-gray-700">
          Whether you prefer traditional note-taking or visual learning through
          video playlists, <span className="font-bold">NotesClub</span> is here
          to support you on your educational journey. Thank you for choosing us
          as your academic companion.
        </p>

        <p className="text-lg text-gray-700 mt-4">
          Together, let's foster a culture of knowledge sharing, collaborative
          learning, and dynamic visual experiences with our video playlists.
          Happy studying!
        </p>
      </div>
    </section>
  );
};

export default About;
