import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Building2, ShoppingCart, GraduationCap, LayoutDashboard, Check, BookOpen, Users, MousePointerClick } from 'lucide-react';

const websiteTypes = [
  { id: 'informational', icon: Globe, title: 'Informational Websites', purpose: 'Share information, not transact.', examples: 'Company profiles, schools, NGOs, government portals', features: ['Static or semi-dynamic pages', 'About, Services, Contact, Policies', 'Minimal user interaction', 'Typical tech: HTML, CSS, basic CMS'], risk: 'Becomes irrelevant if not updated', complexity: 1 },
  { id: 'corporate', icon: Building2, title: 'Business / Corporate Websites', purpose: 'Establish credibility and generate leads.', examples: 'IT firms, consultancies, startups', features: ['Service pages', 'Lead forms', 'Case studies', 'SEO-focused content'], kpi: 'Conversions, inquiries, trust signals', complexity: 2 },
  { id: 'ecommerce', icon: ShoppingCart, title: 'E-commerce Websites', purpose: 'Sell products or services online.', examples: 'Amazon, Flipkart, niche D2C stores', features: ['Product catalogue', 'Cart & checkout', 'Payment gateway', 'Order & inventory management'], note: 'Complexity: High. Critical concerns: Security, performance, scalability.', complexity: 4 },
  { id: 'portfolio', icon: BookOpen, title: 'Portfolio Websites', purpose: 'Showcase skills and work.', examples: 'Designers, developers, photographers', features: ['Project galleries', 'Resume / CV', 'Contact form'], kpi: 'Clarity + visual impact', complexity: 1 },
  { id: 'blog', icon: Globe, title: 'Blogging / Content Websites', purpose: 'Publish articles and long-form content.', examples: 'Medium-style blogs, news portals', features: ['Categories & tags', 'CMS', 'Comments', 'SEO optimisation'], note: 'Revenue models: Ads, sponsorships, subscriptions', complexity: 2 },
  { id: 'educational', icon: GraduationCap, title: 'Educational / E-Learning Websites', purpose: 'Teach and assess users.', examples: 'Online schools, coaching platforms', features: ['Courses & lessons', 'Video hosting', 'Quizzes & certificates', 'User progress tracking'], note: 'Advanced: LMS, role-based access', complexity: 4 },
  { id: 'community', icon: Users, title: 'Community / Social Websites', purpose: 'User interaction and content creation.', examples: 'Forums, social networks', features: ['User profiles', 'Messaging', 'Feeds', 'Moderation tools'], note: 'Biggest challenge: Content moderation & scaling', complexity: 5 },
  { id: 'landing', icon: MousePointerClick, title: 'Landing Pages', purpose: 'One action only (sign up, buy, download).', examples: 'Marketing campaigns, product launches', features: ['Clear CTA', 'Minimal navigation', 'Conversion-driven copy'], note: 'Used heavily in marketing campaigns', complexity: 1 },
  { id: 'portal', icon: LayoutDashboard, title: 'Portal Websites', purpose: 'Central access point for multiple services.', examples: 'Employee portals, government service portals', features: ['Login-based access', 'Role management', 'Multiple subsystems'], note: 'Architecture-heavy', complexity: 5 },
];

export default function WebsiteTypesSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#f8f9fb]">
      <div className="container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-sm font-semibold text-[#1a8a6e] tracking-wider uppercase mb-3">Website Types</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#000066] mb-3">What Are You Looking For?</h2>
          <div className="w-12 h-1 bg-[#1a8a6e] rounded-full mx-auto mb-4" />
          <p className="text-base text-gray-500 max-w-2xl mx-auto">Different goals require different solutions. Explore all website types with their purpose, features, and best use cases.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="h-full"
            >
              <div className="h-full p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#eef1ff]">
                    <type.icon className="w-5 h-5 text-[#000066]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[#000066] leading-snug">{type.title}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Purpose</p>
                    <p className="text-sm text-gray-700">{type.purpose}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Examples</p>
                    <p className="text-sm text-gray-700">{type.examples}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Features</p>
                    <div className="space-y-1.5">
                      {type.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 flex-shrink-0 text-[#1a8a6e] mt-0.5" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {(type.note || type.kpi || type.risk) && (
                    <div className="p-3 rounded-xl bg-[#f8f9fb] border border-[#eef1ff]">
                      <span className="font-semibold text-[#000066] text-sm">Note: </span>
                      <span className="text-gray-500 text-sm">{type.note || type.kpi || type.risk}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
