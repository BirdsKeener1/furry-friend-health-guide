
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Phone, Bell, Heart, Stethoscope, FileText, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Small Animal Medicine",
      date: "Today",
      time: "3:00 PM",
      location: "Downtown Clinic",
      type: "Follow-up",
      status: "confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Emergency Care",
      date: "Tomorrow",
      time: "10:30 AM",
      location: "Pet Emergency Center",
      type: "Check-up",
      status: "pending"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "symptom_check",
      title: "Symptom Check Completed",
      description: "AI analysis for respiratory symptoms",
      time: "2 hours ago",
      severity: "moderate"
    },
    {
      id: 2,
      type: "appointment",
      title: "Appointment Booked",
      description: "With Dr. Sarah Johnson",
      time: "1 day ago",
      severity: "low"
    },
    {
      id: 3,
      type: "reminder",
      title: "Vaccination Reminder",
      description: "Annual vaccine due next week",
      time: "3 days ago",
      severity: "high"
    }
  ];

  const pets = [
    {
      id: 1,
      name: "Buddy",
      type: "Dog",
      breed: "Golden Retriever",
      age: "3 years",
      lastCheckup: "2 months ago",
      status: "healthy"
    },
    {
      id: 2,
      name: "Whiskers",
      type: "Cat",
      breed: "Persian",
      age: "5 years",
      lastCheckup: "6 months ago",
      status: "due_checkup"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, John! 👋
          </h1>
          <p className="text-gray-600">
            Here's an overview of your pets' health and upcoming appointments
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Button
            onClick={() => navigate('/symptoms')}
            className="h-24 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex flex-col items-center justify-center space-y-2"
          >
            <Stethoscope className="h-6 w-6" />
            <span>Symptom Checker</span>
          </Button>
          
          <Button
            onClick={() => navigate('/doctors')}
            className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex flex-col items-center justify-center space-y-2"
          >
            <Calendar className="h-6 w-6" />
            <span>Book Appointment</span>
          </Button>
          
          <Button
            variant="outline"
            className="h-24 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 flex flex-col items-center justify-center space-y-2"
          >
            <FileText className="h-6 w-6" />
            <span>Medical Records</span>
          </Button>
          
          <Button
            variant="outline"
            className="h-24 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 flex flex-col items-center justify-center space-y-2"
          >
            <Bell className="h-6 w-6" />
            <span>Notifications</span>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Appointments */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span>Upcoming Appointments</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{appointment.doctor}</h4>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                      </div>
                      <Badge 
                        variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                        className={appointment.status === 'confirmed' ? 'bg-green-500' : ''}
                      >
                        {appointment.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{appointment.date} at {appointment.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{appointment.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm font-medium text-gray-900">
                        {appointment.type}
                      </span>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                          Join Call
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {upcomingAppointments.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No upcoming appointments</p>
                    <Button 
                      className="mt-4 bg-gradient-to-r from-green-500 to-blue-500 text-white"
                      onClick={() => navigate('/doctors')}
                    >
                      Book an Appointment
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-orange-500" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.severity === 'high' ? 'bg-red-500' :
                      activity.severity === 'moderate' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{activity.title}</h4>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pet Profiles */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Your Pets</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pets.map((pet) => (
                  <div key={pet.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{pet.name}</h4>
                        <p className="text-sm text-gray-600">{pet.breed} • {pet.age}</p>
                      </div>
                      <Badge 
                        variant={pet.status === 'healthy' ? 'default' : 'secondary'}
                        className={pet.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'}
                      >
                        {pet.status === 'healthy' ? 'Healthy' : 'Checkup Due'}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">
                      Last checkup: {pet.lastCheckup}
                    </p>
                  </div>
                ))}
                
                <Button 
                  variant="outline" 
                  className="w-full border-dashed border-2 border-gray-300 text-gray-600 hover:border-green-500 hover:text-green-600"
                >
                  + Add New Pet
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle>Health Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Appointments</span>
                  <span className="font-semibold">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Symptom Checks</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Health Score</span>
                  <Badge className="bg-green-500">Excellent</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
