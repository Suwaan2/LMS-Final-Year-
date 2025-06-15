import React from "react";
import { Target, Heart, Trophy, Users } from "lucide-react";

export default function About() {
  const stats = [
    { number: "50,000+", label: "Students Taught", icon: Users },
    { number: "95%", label: "Job Placement Rate", icon: Trophy },
    { number: "100+", label: "Industry Partners", icon: Target },
    { number: "4.9/5", label: "Average Rating", icon: Heart },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                About{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  SikshyaHub
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                At SikshyaHub, we believe education should be accessible,
                engaging, and empowering for everyone — whether you're a
                student, teacher, or institution. Our platform is built to make
                learning smarter, not harder.
              </p>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Founded in 2020, SikshyaHub was created with a simple yet
                powerful mission: To make quality education accessible and
                effective through technology. In the early days, SikshyaHub
                started as a small initiative aimed at helping educators deliver
                lessons online during challenging times. As the world rapidly
                shifted toward digital learning, we realized the need for a
                reliable, user-friendly platform that could serve both learners
                and instructors with equal efficiency. Over the years, we've
                grown into a complete Learning Management System used by
                students, teachers, and institutions across the country. From
                live classes and interactive quizzes to certification and course
                analytics — we’ve evolved to support every aspect of modern
                education.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Join Our Community
              </button>
              <button className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-orange-500/30"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
