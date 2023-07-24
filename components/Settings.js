import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const SECTIONS = [
  {
    header: 'General Settings',
    icon: 'settings',
    items: [
      { icon: 'book-open', color: '#9768d9', label: 'Language Preference', type: 'link' },
      {
        icon: 'moon',
        color: '#9768d9',
        label: 'Dark Mode',
        value: false,
        type: 'boolean',
      },
      {
        icon: 'bell',
        color: '#9768d9',
        label: 'Push Notifications',
        value: false,
        type: 'boolean',
      },
      {
        icon: 'airplay',
        color: '#9768d9',
        label: 'Accessibility mode',
        value: false,
        type: 'boolean',
      },
      { icon: 'credit-card', color: '#9768d9', label: 'Get Premium', type: 'link' },
    ],
  },

  {
  header: 'Content Settings',
    icon: 'settings',
    items: [
      { icon: 'clipboard', color: '#9768d9', label: 'Difficulty Level', type: 'link' },
      { icon: 'save', color: '#9768d9', label: 'Saved', type: 'link' },
      {
        icon: 'chevrons-down',
        color: '#9768d9',
        label: 'Content Quality',
        type: 'link',
      },
      { icon: 'download', color: '#9768d9', label: 'Download Options', type: 'link' },
      
      
    ],
  },
  
  {
  header: 'My Progress',
    icon: 'settings',
    items: [
      { icon: 'truck', color: '#9768d9', label: 'Remarks', type: 'link' },
      { icon: 'bookmark', color: '#9768d9', label: 'Bookmarks', type: 'link' },
      {
        icon: 'bar-chart-2',
        color: '#9768d9',
        label: 'Test Grades',
        type: 'link',
      },
      { icon: 'award', color: '#9768d9', label: 'Badges', type: 'link' }, 
    ],
  },
  
  {
    header: 'Socials',
    icon: 'help-circle',
    items: [
      { icon: 'facebook', color: '#9768d9', label: 'Connect with Friends', type: 'link' },
      { icon: 'check-circle', color: '#9768d9', label: 'Leaderboard', type: 'link' },
      { icon: 'share-2', color: '#9768d9', label: 'Share', type: 'link' },
    ],
  },
  {
  header: 'Account Settings',
    icon: 'settings',
    items: [
      { icon: 'user', color: '#9768d9', label: 'My Profile', type: 'link' },
      { icon: 'key', color: '#9768d9', label: 'Change Password', type: 'link' },

      { icon: 'lock', color: '#9768d9', label: 'Privacy Settings', type: 'link' },
      { icon: 'user-minus', color: '#9768d9', label: 'Account Deactivation', type: 'link' },
         { icon: 'log-out', color: '#9768d9', label: 'Logout', type: 'link' },
   
      
    ],
  },


  {
    header: 'Help & Support',
    icon: 'help-circle',
    items: [
      { icon: 'info', color: '#9768d9', label: 'About GO-IELTS', type: 'link' },
      { icon: 'flag', color: '#9768d9', label: 'Report Bug', type: 'link' },
      { icon: 'help-circle', color: '#9768d9', label: 'FAQs', type: 'link' },
      { icon: 'users', color: '#9768d9', label: 'Community Forum', type: 'link' },
      
    ],
  },
];

export default function Settings() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    // Get the Firebase Auth instance
    const auth = getAuth();

    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, fetch user data from Realtime Database
        const database = getDatabase();
        const userRef = ref(database, `users/${user.uid}`);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          if (userData) {
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
          }
        });
      } else {
        // User is signed out, you can handle this case if needed
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);
  const handleLogout = () => {
    navigation.navigate('Start');
  };
  const handlePremium = () => {
    navigation.navigate('PremiumPage');
  };
  const handleLeader = () => {
    navigation.navigate('LeaderBoard');
  };
  const handleAbout = () => {
    navigation.navigate('About');
  };
  const handleRemarks = () => {
    navigation.navigate('StudentRemarks');
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: 'https://data.whicdn.com/images/344884373/original.jpg',
                }}
                style={styles.profileAvatar}
              />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.profileAction}>
                  <FeatherIcon color="#fff" name="edit-3" size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View style={styles.profileBody}>
            <Text style={styles.profileName}>{firstName} {lastName}</Text>
          </View>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <Text style={styles.sectionHeader}>{header}</Text>
            {items.map(({ label, icon, type, value, color }, index) => {
              return (
                <TouchableOpacity
                  key={label}
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.row}>
                    <View style={[styles.rowIcon, { backgroundColor: color }]}>
                      <FeatherIcon color="#fff" name={icon} size={18} />
                    </View>

                    <Text style={styles.rowLabel}>{label}</Text>

                    <View style={styles.rowSpacer} />

                    {type === 'boolean' && <Switch value={value} />}

                    {type === 'link' && (<TouchableOpacity
                        onPress={(navigation) => {
                          // handle onPress
                          if (label === 'Logout') {
                            handleLogout();
                          }
                          if (label === 'Get Premium') {
                           handlePremium();
                          }
                          if (label === 'Leaderboard') {
                            handleLeader();
                           }
                           if (label === 'About GO-IELTS') {
                            handleAbout();
                           }
                           if (label === 'Remarks') {
                            handleRemarks();
                           }
                        }}
                      >
                      <FeatherIcon
                        color="#0c0c0c"
                        name="chevron-right"
                        size={22}
                      />
                      </TouchableOpacity>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  profile: {
    padding: 24,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
