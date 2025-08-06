const sessions = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];

function mergeData(sessions) {
  const result = [];
  const sessionForUser = new Map();

  sessions.forEach((session) => {
    if(sessionForUser.has(session.user)) {
      const userSession = sessionForUser.get(session.user);
      userSession.duration += session.duration;
      session.equipment.forEach((equipment) => {
        userSession.equipment.add(equipment);
      });
    } else {
      const clonedSession = {
        ...session,
        equipment: new Set(session.equipment)
      }
      sessionForUser.set(session.user, clonedSession);
      result.push(clonedSession);
    }
  });

  return result.map((session) => ({
    ...session,
    equipment: Array.from(session.equipment).sort()
  }));

}


console.log(mergeData(sessions))