# 📊 Industrial Monitoring Dashboard

> **Real-Time Production Analytics & IoT Data Visualization**

A cutting-edge industrial monitoring solution that automatically scans data from IoT machine sensors and displays real-time metrics on a beautiful, responsive dashboard. Built with modern web technologies for high-performance production environments.

---

## ✨ Key Features

- 🔄 **Auto-Scan IoT Sensors** - Continuous real-time data collection from machine sensors
- 📈 **Dynamic Data Visualization** - Beautiful, interactive charts powered by Recharts
- 🌓 **Dark & Light Mode** - Seamless theme switching for user preference and eye comfort
- ⚡ **Fluid UI Interactions** - Smooth animations and transitions with Framer Motion
- 👤 **Advanced Profile Management** - User profiles with role-based access control
- 🏗️ **Scalable Architecture** - Designed for high-throughput production environments
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile devices
- 🎯 **Real-Time Updates** - Instant data refresh as sensor readings change
- 🛡️ **TypeScript Powered** - Type-safe code for reliability and maintainability

---

## 📸 Dashboard Preview

### Production Metrics & Trends (Dark Mode)
![Production Dashboard - Dark Mode](image4.png)
*Real-time production rate, efficiency metrics, downtime tracking, and quality indicators with live data visualization*

### Quality Analytics (Dark Mode)
![Quality Metrics - Dark Mode](image5.png)
*7-day quality trends showing defect rate, pass rate, and rework rate analytics*

---

## 👤 Profile Section Features

### User Profile Management
The dashboard includes a comprehensive profile management system that enables users to manage their accounts and customize their experience.

#### Profile Information
- **User Avatar** - Upload and customize profile picture
- **Full Name** - Display name across the dashboard
- **Email Address** - Primary contact information
- **Phone Number** - Emergency contact details
- **Job Title** - Department and role information
- **Department** - Organizational structure
- **Employee ID** - Unique identifier in the system
- **Location** - Assigned facility or plant location

#### Account Settings
- **Username** - Unique login identifier
- **Password Management** - Secure password change functionality
- **Two-Factor Authentication (2FA)** - Enhanced account security
- **Session Management** - View and manage active sessions
- **Login History** - Track account access activity
- **Device Management** - Connected devices and locations

#### Preferences & Customization
- **Dashboard Theme** - Dark/Light mode preference persistence
- **Data Refresh Rate** - Custom update intervals for metrics
- **Alert Preferences** - Choose which alerts to receive
- **Notification Settings** - Email, SMS, and in-app notifications
- **Language Selection** - Multi-language support
- **Timezone Configuration** - Display times in preferred timezone
- **Default View** - Custom dashboard layout preferences

#### Role-Based Features
Different user roles have customized profile features:

**Admin Profile**
- 🔐 Full system access and permissions
- 👥 User management capabilities
- 🔧 System configuration options
- 📊 Advanced reporting and exports
- 🚨 Alert rule configuration
- 📋 Audit log access

**Operator Profile**
- 📊 View production dashboards
- 🔔 Receive critical alerts
- 📝 Log production notes
- 🔄 Update machine status
- 📤 Export shift reports

**Manager Profile**
- 📈 Analytics and trend reports
- 👥 Team performance tracking
- 🎯 KPI monitoring and goals
- 📊 Historical data analysis
- 🔄 Shift management
- 📋 Employee oversight

**Supervisor Profile**
- 📱 Real-time monitoring access
- 🚨 Alert acknowledgment
- 📝 Incident logging
- 🔄 Process adjustments
- 👥 Team coordination

### Profile Dashboard Features

#### Personal Profile Page
```
┌─────────────────────────────────────────────────┐
│  👤 My Profile                                  │
├─────────────────────────────────────────────────┤
│ [Avatar]    John Doe                            │
│             Production Manager                   │
│             Plant A - Delhi NCR                  │
│                                                  │
│ 📧 john.doe@company.com                         │
│ 📞 +91 9876 543210                              │
│ 🆔 EMP-2024-001                                 │
│ 🏢 Manufacturing Dept.                          │
└─────────────────────────────────────────────────┘
```

#### Settings Page Features
- **Edit Profile Information** - Update personal details
- **Change Avatar** - Upload new profile picture
- **Security Settings** - Password and 2FA management
- **Notification Preferences** - Customize alerts and messages
- **Privacy Settings** - Control data visibility
- **Backup & Export** - Download personal data
- **Account Deactivation** - Safely close account

#### Activity & Statistics
- **Last Login** - Recent access timestamp
- **Total Logins** - Usage statistics
- **Active Sessions** - Currently connected devices
- **Data Export Count** - Reports generated
- **Alerts Received** - Alert history
- **Actions Performed** - Audit trail

### Security Features in Profile

🔒 **Password Security**
- Minimum 8 characters with complexity requirements
- Password change reminders every 90 days
- Previous password history (last 5 passwords)
- Secure password reset via email verification

🛡️ **Two-Factor Authentication**
- SMS-based OTP verification
- Email-based verification codes
- Authenticator app support
- Backup recovery codes

🔑 **Access Control**
- API key management for integrations
- Session timeout configuration
- IP whitelist functionality
- Login location restrictions

### Profile Integration with Dashboard

**Personalization**
- Dashboard adapts to user role and permissions
- Saved preferences load automatically
- Custom metric selections saved to profile
- Theme preference synced across sessions

**Notifications**
- Alert preferences based on profile settings
- Escalation rules tied to user role
- Team-based notifications for managers
- Shift-aware notification timing

**Data Access**
- Permissions enforced based on profile role
- Department-specific data visibility
- Facility-based data filtering
- Confidential data restrictions

---

## 🏭 What It Monitors

### Key Metrics
- **Production Rate** - Units produced per hour with trend analysis
- **Overall Efficiency** - Line efficiency percentage with historical comparison
- **Downtime Tracking** - Real-time downtime monitoring and alerts
- **Quality Pass Rate** - Quality control metrics and pass/fail ratios
- **Inventory Levels** - Stock monitoring across different material categories
- **Quality Trends** - 7-day rolling quality metrics and analytics

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Basic understanding of React and TypeScript

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hiteshdhr/DashBoard.git
   cd DashBoard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

---

## 🛠️ Technologies Used

### Core Framework
- **React 18** - Modern UI library for dynamic interfaces
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Lightning-fast build tool and dev server

### Data Visualization
- **Recharts** - Composable charting library for beautiful graphs
- **Framer Motion** - Animation library for fluid interactions

### Styling & UI
- **TailwindCSS** - Utility-first CSS framework
- **CSS Modules** - Scoped styling for component isolation

### IoT Integration
- **WebSocket** - Real-time bidirectional communication with sensors
- **REST APIs** - Integration with IoT platform backends

### Authentication & Security
- **JWT** - JSON Web Tokens for secure authentication
- **bcrypt** - Password hashing and security
- **crypto** - Encryption for sensitive data

---

## 🏗️ Architecture

```
src/
├── components/
│   ├── Dashboard/
│   ├── Profile/
│   │   ├── ProfileCard.tsx
│   │   ├── ProfileSettings.tsx
│   │   ├── SecuritySettings.tsx
│   │   ├── NotificationPreferences.tsx
│   │   └── RoleBasedView.tsx
│   ├── Charts/
│   └── Common/
├── pages/
│   ├── Dashboard.tsx
│   ├── Profile.tsx
│   ├── Settings.tsx
│   └── ...
├── hooks/
│   ├── useProfile.ts
│   ├── useAuth.ts
│   └── ...
├── services/
│   ├── profileService.ts
│   ├── authService.ts
│   └── ...
├── types/
│   ├── user.types.ts
│   ├── profile.types.ts
│   └── ...
├── utils/
└── styles/
```

---

## 🔌 IoT Sensor Integration

### Auto-Scanning Features
The dashboard automatically connects to IoT sensors and:
- Continuously reads machine sensor data
- Updates metrics in real-time (every 1-5 seconds)
- Handles connection drops gracefully with reconnection logic
- Stores historical data for trend analysis
- Triggers alerts on threshold breaches

### Supported Sensor Data
- **Production Metrics** - Units/hour, temperature, pressure
- **Quality Data** - Defect rates, pass/fail counts, quality scores
- **Inventory Data** - Stock levels, material usage, capacity
- **Machine Health** - Uptime, efficiency, maintenance status

---

## 🌓 Theme Support

### Dark Mode
- 🌙 Eye-friendly dark interface for low-light environments
- Optimized contrast for readability
- Reduces eye strain during long shifts
- Professional industrial aesthetics

### Light Mode
- ☀️ Clean, bright interface for well-lit facilities
- High visibility for quick scanning
- Professional presentation mode
- Toggle seamlessly anytime

**Toggle Theme:** Click the sun/moon icon in the top-right corner or profile settings

---

## 📊 Dashboard Sections

### 1. KPI Cards
Real-time key performance indicators with:
- Current metric value
- Trend indicator (↑/↓)
- Comparison with previous period
- Color-coded status

### 2. Production Trends Chart
- 24-hour production timeline
- Production vs. Target comparison
- Smooth line chart with hover tooltips
- Customizable time ranges

### 3. Inventory Levels
- Bar chart visualization
- Capacity vs. Current levels
- Multi-category comparison
- Color-coded category identification

### 4. Quality Metrics
- 7-day quality trend analysis
- Multiple quality metrics overlay
- Interactive legend for metric filtering
- Export capabilities

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=http://your-iot-backend-url
VITE_WEBSOCKET_URL=ws://your-websocket-server
VITE_REFRESH_INTERVAL=3000
VITE_ALERT_THRESHOLD=85
VITE_JWT_SECRET=your-jwt-secret-key
VITE_2FA_ENABLED=true
```

### Sensor Configuration
Update sensor mappings in `src/config/sensors.ts`:

```typescript
export const SENSOR_CONFIG = {
  production: {
    id: 'prod-001',
    name: 'Production Rate',
    unit: 'units/hr',
    threshold: 900
  },
  // ... more sensor configurations
};
```

### User Roles Configuration
Define roles in `src/config/roles.ts`:

```typescript
export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  OPERATOR: 'operator',
  SUPERVISOR: 'supervisor'
};

export const ROLE_PERMISSIONS = {
  admin: ['read', 'write', 'delete', 'manage_users'],
  manager: ['read', 'write', 'view_reports'],
  operator: ['read', 'acknowledge_alerts'],
  supervisor: ['read', 'write', 'manage_team']
};
```

---

## 👥 User Management

### Admin Panel Features
- **Create Users** - Add new team members with roles
- **Edit Profiles** - Modify user information and permissions
- **Deactivate Accounts** - Safely disable user access
- **Reset Passwords** - Administrative password reset
- **Bulk Operations** - Import/export user data
- **Audit Logs** - Track administrative actions

### User Access Levels
| Feature | Admin | Manager | Operator | Supervisor |
|---------|-------|---------|----------|------------|
| View Dashboard | ✅ | ✅ | ✅ | ✅ |
| Edit Settings | ✅ | ✅ | ✅ | ✅ |
| Manage Users | ✅ | ❌ | ❌ | ❌ |
| View Reports | ✅ | ✅ | ❌ | ✅ |
| Change System Config | ✅ | ❌ | ❌ | ❌ |
| Acknowledge Alerts | ✅ | ✅ | ✅ | ✅ |
| Export Data | ✅ | ✅ | ❌ | ✅ |

---

## 📈 Performance Optimization

- ⚡ **Code Splitting** - Lazy loading for optimal bundle size
- 🎯 **Memoization** - React.memo for chart performance
- 📦 **Tree Shaking** - Unused code elimination
- 🖼️ **Image Optimization** - Efficient asset loading
- 📡 **WebSocket Optimization** - Efficient real-time updates
- 👤 **Profile Caching** - Cached user data for faster loads

---

## 🚨 Alert System

The dashboard includes intelligent alerts for:
- Production rate drop below threshold
- Efficiency below minimum acceptable level
- Downtime exceeding limits
- Quality metrics falling below standards
- Inventory levels critically low
- Sensor connection failures
- **User-specific alerts** based on profile role and preferences

---

## 🔐 Security Features

- 🛡️ Type safety with TypeScript
- ✅ Input validation on all data
- 🔐 Secure API communication (HTTPS)
- 🎫 JWT token-based authentication
- 📊 Data encryption for sensitive metrics
- 👤 Profile-based access control
- 🔑 Two-factor authentication support
- 🚪 Session management and timeout

---

## 📱 Responsive Design

Optimized breakpoints for:
- 📺 Desktop (1920px+)
- 🖥️ Large screens (1280px+)
- 💻 Tablets (768px+)
- 📱 Mobile devices (320px+)

Profile section fully responsive on all devices.

---

## 🤝 Contributing

We welcome contributions! To get involved:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 Commit Messages

Please follow conventional commits:
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation
- `style:` formatting changes
- `refactor:` code restructuring
- `perf:` performance improvements
- `test:` test additions

---

## 🐛 Troubleshooting

### Profile Not Loading
- Check authentication token validity
- Verify API endpoint is accessible
- Clear browser cache and localStorage

### 2FA Not Working
- Ensure device time is synchronized
- Check authenticator app configuration
- Verify recovery codes are backed up

### Sensors Not Connecting
- Verify WebSocket URL in `.env`
- Check sensor server is running
- Review browser console for errors

### Charts Not Updating
- Clear browser cache
- Restart development server
- Verify API data format matches expected schema

### Theme Not Switching
- Check browser localStorage support
- Clear browser cookies and cache
- Verify CSS files are loaded

---

## 📄 License

This project is open source and available under the **MIT License**. See LICENSE file for details.

---

## 🌟 Support & Contact

Need help? Get in touch:
- 💬 **GitHub Issues** - Report bugs and request features
- 📧 **Email** - contact@example.com
- 📞 **Phone** - +91 9XXX XXXXXX
- 🌐 **Website** - https://github.com/hiteshdhr

---

## 📊 Monitoring Best Practices

1. **Regular Calibration** - Calibrate sensors monthly for accuracy
2. **Data Backup** - Maintain historical data backups
3. **Alert Response** - Act promptly on critical alerts
4. **Performance Review** - Analyze trends weekly
5. **System Updates** - Keep firmware and software updated
6. **Security Audits** - Regular security reviews
7. **Profile Audits** - Review user access periodically

---

## 🚀 Roadmap

- [ ] Machine learning-based anomaly detection
- [ ] Predictive maintenance alerts
- [ ] Multi-site dashboard aggregation
- [ ] Mobile native app
- [ ] Advanced reporting and exports
- [ ] Custom metric builder
- [ ] Integration with popular IoT platforms
- [ ] Advanced profile customization options
- [ ] Team collaboration features
- [ ] Single Sign-On (SSO) integration

---

**Transform your production environment with real-time visibility, actionable insights, and powerful user management! 🏭📊👤**
