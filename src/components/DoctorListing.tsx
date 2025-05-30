
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Phone, Calendar, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DoctorListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Small Animal Medicine",
      rating: 4.9,
      reviews: 127,
      experience: "8 years",
      location: "Downtown Clinic, New York",
      distance: "2.3 miles",
      availability: "Available today",
      nextSlot: "3:00 PM",
      image: "/api/placeholder/80/80",
      specialties: ["Emergency Care", "Surgery", "Dental Care"],
      education: "DVM from Cornell University",
      phone: "+1 (555) 123-4567",
      price: "$75 - $150"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Emergency & Critical Care",
      rating: 4.8,
      reviews: 89,
      experience: "12 years",
      location: "Pet Emergency Center, Brooklyn",
      distance: "4.1 miles",
      availability: "Available now",
      nextSlot: "5:30 PM",
      image: "/api/placeholder/80/80",
      specialties: ["Emergency Medicine", "Internal Medicine", "Cardiology"],
      education: "DVM from UC Davis",
      phone: "+1 (555) 234-5678",
      price: "$100 - $200"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Internal Medicine",
      rating: 4.7,
      reviews: 156,
      experience: "6 years",
      location: "Animal Medical Center, Manhattan",
      distance: "1.8 miles",
      availability: "Tomorrow",
      nextSlot: "9:00 AM",
      image: "/api/placeholder/80/80",
      specialties: ["Gastroenterology", "Endocrinology", "Nephrology"],
      education: "DVM from Texas A&M",
      phone: "+1 (555) 345-6789",
      price: "$80 - $160"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Exotic Animal Medicine",
      rating: 4.9,
      reviews: 73,
      experience: "10 years",
      location: "Exotic Pet Clinic, Queens",
      distance: "6.2 miles",
      availability: "Available today",
      nextSlot: "11:00 AM",
      image: "/api/placeholder/80/80",
      specialties: ["Birds", "Reptiles", "Small Mammals"],
      education: "DVM from University of Pennsylvania",
      phone: "+1 (555) 456-7890",
      price: "$90 - $180"
    }
  ];

  const handleBookAppointment = (doctor: any) => {
    navigate('/appointment', { state: { doctor } });
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !specialty || doctor.specialty.toLowerCase().includes(specialty.toLowerCase());
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Expert Veterinarians
          </h1>
          <p className="text-xl text-gray-600">
            Connect with certified veterinary professionals in your area
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-xl border-0 mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search doctors or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Specialties</SelectItem>
                  <SelectItem value="small animal">Small Animal Medicine</SelectItem>
                  <SelectItem value="emergency">Emergency Care</SelectItem>
                  <SelectItem value="internal">Internal Medicine</SelectItem>
                  <SelectItem value="exotic">Exotic Animals</SelectItem>
                  <SelectItem value="surgery">Surgery</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Location..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Doctor Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="shadow-xl border-0 hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Doctor Image */}
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  {/* Doctor Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                        <p className="text-green-600 font-medium">{doctor.specialty}</p>
                        <p className="text-sm text-gray-600">{doctor.education}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{doctor.rating}</span>
                          <span className="text-sm text-gray-600">({doctor.reviews})</span>
                        </div>
                        <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((spec, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>

                    {/* Location and Contact */}
                    <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{doctor.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>{doctor.phone}</span>
                      </div>
                    </div>

                    {/* Availability and Booking */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-green-600 font-medium">
                            {doctor.availability}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Next available: {doctor.nextSlot}
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {doctor.price}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Button
                          onClick={() => handleBookAppointment(doctor)}
                          className="bg-gradient-to-r from-green-500 to-blue-500 text-white"
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Appointment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No doctors found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or location
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorListing;
