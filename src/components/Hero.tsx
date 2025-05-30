
import { Button } from '@/components/ui/button';
import { Heart, Shield, Zap, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Diagnosis",
      description: "Advanced AI analyzes symptoms instantly"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Get help for your pet anytime, anywhere"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Expert Veterinarians",
      description: "Connect with certified pet professionals"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Caring Support",
      description: "Compassionate care for your beloved pets"
    }
  ];

  return (
    <div className="gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">AI-Powered</span><br />
                Veterinary Care<br />
                for Your Pets
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get instant AI-powered symptom analysis, connect with expert veterinarians, 
                and book appointments seamlessly. Your pet's health, our priority.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => navigate('/symptoms')}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
              >
                Check Symptoms Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/doctors')}
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
              >
                Find Veterinarians
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-8 transform rotate-3 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 transform -rotate-3">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Pet Health Analysis</h3>
                      <p className="text-sm text-gray-600">AI diagnosis in progress...</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-3 bg-gradient-to-r from-green-200 to-green-400 rounded-full"></div>
                    <div className="h-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full w-4/5"></div>
                    <div className="h-3 bg-gradient-to-r from-purple-200 to-purple-400 rounded-full w-3/5"></div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">
                      Recommendation: Schedule a check-up with Dr. Smith
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
