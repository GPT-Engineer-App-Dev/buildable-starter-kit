import React from 'react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
        <p className="text-xl text-gray-600 mb-8">Start building your amazing project here!</p>
        <Button>Get Started</Button>
      </div>
    </Layout>
  );
};

export default Index;