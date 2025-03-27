import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const fetchCourseDetails = async (id: number) => {
  const resourcesData = [
    {
      id: 1,
      title: "Mastering React.js",
      creator: "John Doe",
      description: "A complete guide to building dynamic web applications with React.",
      learningOutcomes: ["Understand React fundamentals", "Manage state with Hooks", "Build scalable UI components"],
      uploadedFiles: [{ name: "React Guide.pdf", type: "PDF", url: "#" }],
      rating: 4.8,
      reviews: [{ user: "Alice", comment: "Great course!" }],
    },
    {
      id: 2,
      title: "Python for Data Science",
      creator: "Jane Smith",
      description: "Learn data science with Python from scratch.",
      learningOutcomes: ["Work with Pandas", "Build ML models", "Data visualization"],
      uploadedFiles: [{ name: "Python Data Science.pdf", type: "PDF", url: "#" }],
      rating: 4.7,
      reviews: [{ user: "Charlie", comment: "Very informative!" }],
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resourcesData.find((res) => res.id === id));
    }, 1000);
  });
};

const ResourceDetails = () => {
  const { id } = useParams();
  const [resource, setResource] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResource = async () => {
      const data = await fetchCourseDetails(Number(id));
      setResource(data);
      setLoading(false);
    };
    loadResource();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!resource) return <div className="min-h-screen flex items-center justify-center text-red-500">Resource Not Found</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold">{resource.title}</h1>
        <p className="text-gray-600 mt-2">By {resource.creator}</p>
        <p className="mt-4 text-lg">{resource.description}</p>

        <h2 className="mt-6 text-2xl font-semibold">What You'll Learn</h2>
        <ul className="list-disc ml-6 mt-2">
          {resource.learningOutcomes.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">Uploaded Files</h2>
        <ul className="mt-2">
          {resource.uploadedFiles.map((file: any, index: number) => (
            <li key={index} className="mt-1">
              <a href={file.url} className="text-blue-600 hover:underline">
                {file.name} ({file.type})
              </a>
            </li>
          ))}
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">
          Reviews ({resource.rating} ⭐)
        </h2>
        <ul className="mt-2">
          {resource.reviews.map((review: any, index: number) => (
            <li key={index} className="border-b py-2">
              <strong>{review.user}</strong>: {review.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResourceDetails;