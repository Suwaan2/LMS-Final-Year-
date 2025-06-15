import React from 'react';
import { Code2, Video, Award, Users, MessageCircle, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Code2,
      title: "Hands-on Projects",
      description: "Build real-world applications while learning. Every concept is reinforced with practical coding exercises."
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "High-quality video content with step-by-step explanations and live coding demonstrations."
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn industry-recognized certificates upon course completion to showcase your skills."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of learners in our active community forums and study groups."
    },
    {
      icon: MessageCircle,
      title: "1-on-1 Mentoring",
      description: "Get personalized guidance from experienced developers to accelerate your learning."
    },
    {
      icon: Zap,
      title: "Fast Track Learning",
      description: "Optimized curriculum designed to get you job-ready in the shortest time possible."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SikshyaHUb</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide everything you need to succeed in your coding journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}