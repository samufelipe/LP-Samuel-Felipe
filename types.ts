
// Added React import to fix "Cannot find namespace 'React'" errors
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel: string;
  icon: React.ReactNode;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CaseStudy {
  clientName: string;
  description: string;
  results: string[];
  logo: string;
}