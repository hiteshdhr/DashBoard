import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { User, Mail, Shield, Key, Edit2, Save, X } from 'lucide-react';

export default function Profile() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const [isEditing, setIsEditing] = useState(false);
  
  const [profile, setProfile] = useState({
    name: 'Mukes Kumar',
    title: 'Production Manager',
    email: 'mukes.kumar@plimeagro.com',
    role: 'Administrator'
  });

  const [editForm, setEditForm] = useState({ ...profile });

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({ ...profile });
    setIsEditing(false);
  };

  const inputClasses = `w-full rounded p-2 outline-none border focus:ring-2 focus:ring-blue-500 ${
    darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
  }`;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>User Profile</h1>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <Edit2 className="w-4 h-4" />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button 
              onClick={handleCancel}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              }`}
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                darkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className={`rounded-xl p-8 border-2 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
      }`}>
        <div className="flex items-center gap-6">
          <div className={`p-6 rounded-full shrink-0 ${darkMode ? 'bg-blue-900/40 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
            <User className="w-16 h-16" />
          </div>
          <div className="flex-1 space-y-3">
            {isEditing ? (
              <div className="space-y-4 max-w-md">
                <div>
                  <label className={`block text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Full Name</label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={`block text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Job Title</label>
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    className={inputClasses}
                  />
                </div>
              </div>
            ) : (
              <div>
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{profile.name}</h2>
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{profile.title}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-8 border-2 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
      }`}>
        <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Personal Information</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Mail className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`w-24 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</span>
            </div>
            <div className="flex-1 max-w-md ml-4 text-right sm:text-left">
              {isEditing ? (
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className={inputClasses}
                />
              ) : (
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>{profile.email}</span>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Shield className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`w-24 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Role</span>
            </div>
            <div className="flex-1 max-w-md ml-4 text-right sm:text-left">
              {isEditing ? (
                <select
                  value={editForm.role}
                  onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                  className={inputClasses}
                >
                  <option value="Administrator">Administrator</option>
                  <option value="Manager">Manager</option>
                  <option value="Operator">Operator</option>
                  <option value="Viewer">Viewer</option>
                </select>
              ) : (
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>{profile.role}</span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Key className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`w-24 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</span>
            </div>
            <div className="flex-1 ml-4 text-right sm:text-left">
              <button 
                disabled={isEditing}
                className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
                  isEditing 
                    ? darkMode ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
