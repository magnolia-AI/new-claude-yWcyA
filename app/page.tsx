'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { useToast } from "@/hooks/use-toast"
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  Sparkles,
  Rocket,
  Globe,
  Heart,
  Award,
  Target,
  BarChart3
} from 'lucide-react'

export default function Home() {
  const { toast } = useToast()

  const handleGetStarted = () => {
    toast({
      title: "Welcome aboard! 🚀",
      description: "Ready to transform your business with our SaaS platform?",
    })
  }

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for teams of all sizes",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Deep insights and real-time analytics to drive growth",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Scale",
      description: "Deploy worldwide with our global infrastructure network",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Easy Integration",
      description: "Connect with your favorite tools in minutes, not hours",
      color: "from-pink-400 to-red-500"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      avatar: "SC",
      content: "This platform transformed our workflow completely. We've seen 300% productivity increase!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, InnovateLab",
      avatar: "MR", 
      content: "The best SaaS solution we've ever used. Incredible features and outstanding support.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Product Manager, GrowthCo",
      avatar: "EW",
      content: "Game-changing platform! Our team collaboration has never been better.",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for small teams getting started",
      features: ["Up to 5 team members", "10GB storage", "Basic analytics", "Email support"],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Professional", 
      price: "$29",
      description: "Advanced features for growing businesses",
      features: ["Up to 25 team members", "100GB storage", "Advanced analytics", "Priority support", "Custom integrations"],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "Full-scale solution for large organizations",
      features: ["Unlimited team members", "1TB storage", "Enterprise analytics", "24/7 phone support", "Custom development", "SLA guarantee"],
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ]

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="relative container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              New: AI-Powered Features Available Now!
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Business Today
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              The most powerful SaaS platform to streamline your workflow, boost productivity, 
              and scale your business to new heights. Join thousands of happy customers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleGetStarted}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg font-semibold border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-800 dark:hover:to-slate-700"
              >
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-medium">Trusted by 50,000+ companies</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm font-medium">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Everything You Need to Succeed
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you work smarter, not harder
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0">
              <Heart className="h-4 w-4 mr-2" />
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Loved by Thousands
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers have to say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
              <Target className="h-4 w-4 mr-2" />
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing that grows with your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-purple-500 shadow-2xl scale-105' : ''} bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                    <Award className="h-4 w-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center text-white mb-4`}>
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800'} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Join thousands of successful companies who have already made the switch. 
            Start your free trial today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleGetStarted}
            >
              Start Free Trial
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


