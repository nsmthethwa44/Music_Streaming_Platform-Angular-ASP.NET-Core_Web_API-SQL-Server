export const SidebarLinks = {
  admin: [
    {icon: "fa-solid fa-layer-group",  label: 'Dashboard', path: '/admin' },
    {icon: "fa-solid fa-users",  label: 'User Management', path: '/admin/users' },
    {icon: "fa-solid fa-book",  label: 'Courses', path: '/admin/courses' },
  ],
  listener: [
    {icon: "fa-solid fa-layer-group",  label: 'Dashboard', path: '' },
    {icon: "fa-solid  fa-music",  label: 'Browse', path: '/browser' },
    {icon: "fa-solid  fa-magnifying-glass",  label: 'Search', path: '/instructor/my-students' },
    {icon: "fa-solid fa-users",  label: 'Artists', path: '/instructor/my-students' },
    {icon: "fa-solid fa-headphones",  label: 'Genres & Tools', path: '/instructor/my-students' },
    {icon: "fa-solid fa-icons",  label: 'Playlist', path: '/instructor/my-students' },
    {icon: "fa-solid fa-heart",  label: 'Liked Songs', path: '/instructor/my-students' },
  ],
  artist: [
    {icon: "fa-solid fa-layer-group",  label: 'Dashboard', path: '/artist' },
    {icon: "fa-solid fa-upload",  label: 'Upload Song', path: '/artist/upload' },
    {icon: "fa-solid  fa-podcast",  label: 'Podcast Studio', path: '/artist/podcast' },
    {icon: "fa-solid fa-chart-bar",  label: 'Audience Insights', path: '/artist/insights' },
    {icon: "fa-solid fa-gear",  label: 'Profile Settings', path: '/artist/settings' },
  ]
};




