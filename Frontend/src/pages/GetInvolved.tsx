import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiShare2, FiClock, FiMapPin, FiTwitter } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GetInvolved = () => {
  const volunteerOpportunities = [
    {
      title: "Field Projects",
      type: "Infrastructure Ecosystems",
      description: "Habitat restoration, tree planting, wildlife monitoring",
      commitment: "4+ hours/week"
    },
    {
      title: "Education & Outreach",
      type: "Community Engagement",
      description: "Workshop facilitation, school programs, event coordination",
      commitment: "Flexible hours"
    },
    {
      title: "Technical Support",
      type: "Administrative/IT",
      description: "Data entry, social media management, GIS mapping",
      commitment: "Remote options"
    },
    {
      title: "Special Events",
      type: "Logistics & Planning",
      description: "Fundraisers, conferences, community festivals",
      commitment: "Project-based"
    }
  ];

  const wcsfThemes = [
    "Carbon Market Innovation",
    "Climate Finance Mechanisms",
    "Nature-Based Tech Solutions",
    "Community-Led Adaptation",
    "Policy Frameworks"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-green-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Global Movement
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you volunteer, partner, or support financially, your action matters
          </p>
        </div>
      </motion.section>

      {/* Volunteer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Opportunities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {volunteerOpportunities.map((opp, index) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-green-50 p-6 rounded-xl border border-green-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white p-2 rounded-lg">
                    <FiClock className="w-5 h-5" />
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-600">
                    {opp.commitment}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{opp.title}</h3>
                <p className="text-green-600 mb-2">{opp.type}</p>
                <p className="text-gray-600">{opp.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-green-600 text-white p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Volunteer Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FiShare2 className="w-5 h-5 mr-3" />
                  Free training workshops on conservation techniques
                </li>
                <li className="flex items-center">
                  <FiMapPin className="w-5 h-5 mr-3" />
                  Field visits to project sites
                </li>
                <li className="flex items-center">
                  <FiExternalLink className="w-5 h-5 mr-3" />
                  Networking with environmental professionals
                </li>
              </ul>
            </motion.div>

            {/* Application Process */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">How to Apply</h3>
                <ol className="list-decimal list-inside space-y-4">
                  <li>Complete our online application form</li>
                  <li>Attend virtual orientation session</li>
                  <li>Match with suitable project</li>
                  <li>Begin your impact journey</li>
                </ol>
              </div>
              <a
                href="/volunteer-application"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
              >
                Start Application
              </a>
            </motion.div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <blockquote className="text-gray-600 italic mb-4">
                "Volunteering with Ecotropics transformed my understanding of community-led conservation."
              </blockquote>
              <p className="font-medium">- Emily, Field Volunteer</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <blockquote className="text-gray-600 italic mb-4">
                "The technical training I received opened new career opportunities in sustainability."
              </blockquote>
              <p className="font-medium">- Raj, GIS Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Career Opportunities</h2>
          <div className="bg-white p-8 rounded-xl max-w-2xl mx-auto shadow-lg">
            <p className="text-xl text-gray-600 mb-6">
              We're building our team of climate champions. Check back soon for open positions or
              submit your resume for future consideration.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:careers@ecotropics.org"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Submit CV
              </a>
              <p className="text-sm text-gray-500">
                EEO Employer • Full vaccination required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WCSF Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-8">World Climate Solutions Forum</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">2024 Summit Overview</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Date: November 15-17, 2024</li>
                  <li>Location: Bogotá, Colombia</li>
                  <li>Participants: 500+ delegates from 40 countries</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Themes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {wcsfThemes.map((theme) => (
                    <div key={theme} className="bg-white p-3 rounded-lg text-sm">
                      {theme}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Featured Speakers</h3>
                <ul className="space-y-2">
                  <li>Climate Finance Experts</li>
                  <li>VC Investors</li>
                  <li>Indigenous Leaders</li>
                  <li>Government Representatives</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Get Updates</h3>
                <div className="flex items-center space-x-4">
                  <a href="https://twitter.com/wcsforum" className="text-green-600 hover:text-green-700">
                    <FiTwitter className="w-6 h-6" />
                  </a>
                  <p className="text-gray-600">Follow @wcsforum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              REDD+ Project Verification Milestone
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-2">Project Overview</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>36,807 hectares in Antioquia, Colombia</li>
                  <li>12 endangered species protected</li>
                  <li>VERSA validation underway</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Community Impact</h4>
                <ul className="list-check list-inside space-y-2">
                  <li>150+ local jobs created</li>
                  <li>20 community training programs</li>
                  <li>Ecosystem infrastructure development</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-medium mb-2">Carbon Credits</h4>
                <p className="text-gray-600">
                  Expected issuance: Q1 2025 on Emstream/Emsurge
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-medium mb-2">Partnerships</h4>
                <p className="text-gray-600">
                  Collaborating with 14 local municipalities
                </p>
              </div>
            </div>

            <a
              href="https://www.ecoregistry.io/projects/47"
              className="mt-6 inline-flex items-center text-green-600 hover:text-green-700"
            >
              View Project Registry
              <FiExternalLink className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;