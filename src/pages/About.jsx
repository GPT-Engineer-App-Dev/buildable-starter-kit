import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About MyApp</h1>
        <p className="text-gray-600 mb-4">
          MyApp is a versatile and powerful application designed to help users achieve their goals.
          Whether you're a professional looking to streamline your workflow or an individual seeking
          to organize your personal life, MyApp has the tools and features you need.
        </p>
        <p className="text-gray-600">
          Our team is dedicated to continually improving and expanding MyApp to meet the evolving
          needs of our users. We value your feedback and are committed to providing an exceptional
          user experience.
        </p>
      </div>
    </Layout>
  );
};

export default About;