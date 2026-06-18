/**
 * Sesiones en vivo por clase — el profesor actualiza fechas y links Zoom/Meet aquí.
 * status: scheduled | live | completed | pending
 */
window.DS_LIVE_SESSIONS = {
  courseId: 'data-science',
  courseTitle: 'Data Science',
  classesUrl: '../data-science/clases.html',
  timezone: 'America/Argentina/Buenos_Aires',
  timezoneLabel: 'ART',
  defaultProfessor: 'Lic. Ana Rodríguez',
  sessions: {
    1: {
      professor: 'Lic. Ana Rodríguez',
      scheduledAt: '2026-06-10T18:00:00-03:00',
      durationMin: 90,
      meetingType: 'zoom',
      meetingUrl: 'https://zoom.us/j/92345678901',
      meetingId: '923 4567 8901',
      passcode: 'vorox01',
      status: 'scheduled',
      notes: 'Introducción al programa y presentación de la cohorte.'
    },
    2: {
      professor: 'Lic. Ana Rodríguez',
      scheduledAt: '2026-06-12T18:00:00-03:00',
      durationMin: 90,
      meetingType: 'zoom',
      meetingUrl: 'https://zoom.us/j/92345678902',
      meetingId: '923 4567 8902',
      passcode: 'vorox02',
      status: 'scheduled',
      notes: 'CRISP-DM aplicado a un caso de negocio en grupo.'
    },
    3: {
      professor: 'Lic. Ana Rodríguez',
      scheduledAt: '2026-06-17T18:00:00-03:00',
      durationMin: 90,
      meetingType: 'zoom',
      meetingUrl: 'https://zoom.us/j/92345678903',
      meetingId: '923 4567 8903',
      passcode: 'vorox03',
      status: 'scheduled',
      notes: 'Taller de clasificación de variables y auditoría de datasets.'
    },
    4: {
      professor: 'Lic. Ana Rodríguez',
      scheduledAt: '2026-06-19T18:00:00-03:00',
      durationMin: 90,
      meetingType: 'meet',
      meetingUrl: 'https://meet.google.com/vorox-ds-clase04',
      status: 'scheduled',
      notes: 'Debate sobre ética, sesgo y privacidad con casos reales.'
    }
  }
};
