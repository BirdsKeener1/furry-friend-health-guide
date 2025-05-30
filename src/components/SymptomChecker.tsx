
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Bot, Send, AlertCircle, Calendar, Stethoscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [petType, setPetType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!symptoms.trim() || !petType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResult = {
        condition: "Possible Upper Respiratory Infection",
        severity: "Moderate",
        confidence: 85,
        recommendations: [
          "Monitor temperature regularly",
          "Ensure adequate hydration",
          "Keep pet warm and comfortable",
          "Schedule veterinary consultation within 24-48 hours"
        ],
        suggestedDoctors: [
          { name: "Dr. Sarah Johnson", specialty: "Small Animal Medicine", rating: 4.9, availability: "Today 3:00 PM" },
          { name: "Dr. Michael Chen", specialty: "Emergency Care", rating: 4.8, availability: "Today 5:30 PM" },
          { name: "Dr. Emily Rodriguez", specialty: "Internal Medicine", rating: 4.7, availability: "Tomorrow 9:00 AM" }
        ]
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleBookAppointment = (doctor: any) => {
    toast({
      title: "Appointment Booking",
      description: `Redirecting to book with ${doctor.name}...`
    });
    navigate('/appointment', { state: { doctor, symptoms, petType } });
  };

  return (
    <div className="min-h-screen gradient-bg py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full mb-4">
            <Bot className="h-5 w-5" />
            <span className="font-medium">AI Symptom Checker</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Describe Your Pet's Symptoms
          </h1>
          <p className="text-xl text-gray-600">
            Our AI will analyze the symptoms and provide instant recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Stethoscope className="h-5 w-5 text-green-600" />
                <span>Pet Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pet Type *
                </label>
                <Select value={petType} onValueChange={setPetType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your pet type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">Dog</SelectItem>
                    <SelectItem value="cat">Cat</SelectItem>
                    <SelectItem value="bird">Bird</SelectItem>
                    <SelectItem value="rabbit">Rabbit</SelectItem>
                    <SelectItem value="hamster">Hamster</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe Symptoms *
                </label>
                <Textarea
                  placeholder="Please describe your pet's symptoms in detail. Include when they started, how severe they are, and any other relevant information..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level
                </label>
                <Select value={urgency} onValueChange={setUrgency}>
                  <SelectTrigger>
                    <SelectValue placeholder="How urgent is this?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency - Immediate attention needed</SelectItem>
                    <SelectItem value="urgent">Urgent - Same day care</SelectItem>
                    <SelectItem value="moderate">Moderate - Within 1-2 days</SelectItem>
                    <SelectItem value="mild">Mild - Routine check-up</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                size="lg"
              >
                {isAnalyzing ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Analyzing Symptoms...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Analyze Symptoms</span>
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          <div className="space-y-6">
            {isAnalyzing && (
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="animate-pulse">
                      <Bot className="h-16 w-16 text-green-500 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      AI Analysis in Progress
                    </h3>
                    <p className="text-gray-600">
                      Our AI is carefully analyzing your pet's symptoms...
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {analysisResult && (
              <div className="space-y-6">
                {/* Analysis Result */}
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                      <span>AI Analysis Result</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {analysisResult.condition}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant={analysisResult.severity === 'Moderate' ? 'default' : 'destructive'}>
                          {analysisResult.severity}
                        </Badge>
                        <Badge variant="outline">
                          {analysisResult.confidence}% confidence
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Recommendations:</h4>
                      <ul className="space-y-1">
                        {analysisResult.recommendations.map((rec: string, index: number) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Suggested Doctors */}
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      <span>Recommended Veterinarians</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {analysisResult.suggestedDoctors.map((doctor: any, index: number) => (
                      <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">{doctor.name}</h4>
                            <p className="text-sm text-gray-600">{doctor.specialty}</p>
                            <p className="text-sm text-green-600 font-medium">
                              Available: {doctor.availability}
                            </p>
                          </div>
                          <div className="text-right space-y-2">
                            <div className="flex items-center space-x-1">
                              <span className="text-yellow-500">★</span>
                              <span className="text-sm font-medium">{doctor.rating}</span>
                            </div>
                            <Button 
                              size="sm"
                              onClick={() => handleBookAppointment(doctor)}
                              className="bg-gradient-to-r from-green-500 to-blue-500 text-white"
                            >
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
