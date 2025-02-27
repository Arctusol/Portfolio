import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Head from "@/components/common/Head";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Head 
        title="Page non trouvée"
        description="La page que vous recherchez n'existe pas."
      />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-neon mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">
            Oops! La page que vous recherchez n'existe pas.
          </p>
          <a
            href="/"
            className="px-6 py-3 rounded-lg bg-neon text-black hover:bg-neon-muted transition-colors"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
